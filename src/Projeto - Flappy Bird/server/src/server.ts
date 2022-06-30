import express from "express";
import socketio from "socket.io";
import http from "http";
import path from "path";

const users = []
const team1 = {
    pontuation: 25,
    players: []
};
const team2 = {
    pontuation: 25,
    players: []
};

const app = express();
const httpServer = http.createServer(app);
const io = new socketio.Server(httpServer);

app.use(express.static(path.resolve(__dirname, '../../')))

function sepateTeam(users) {
    for (let i = 0; i < users.length; i++) {
        if (i % 2 === 0) {
            team1.players.push(users[i].id);
            io.emit("team", users[i].id, "team1");
        } else {
            team2.players.push(users[i].id);
            io.emit("team", users[i].id, "team2");
        }
    }
}

io.on("connection", (socket) => {

    users.push(socket);

    if(users.length !== 4) {
        console.log(`Esperando outros jogadores ${users.length}/4}`)
    } else if (users.length === 4) {
        console.log(`Esperando outros jogadores ${users.length}/4}`)
        sepateTeam(users);
        io.emit("start");

        for(let user of users) {
            user.broadcast.emit("newPlayer", user.id);
        }
        
    }
    socket.on("hit", (id) => {
        for(let player of team1.players) {
            if(player === id) {
                team1.pontuation--;
                console.log(team1.pontuation);
            }
        }
        for(let player of team2.players) {
            if(player === id) {
                console.log(player);
                team2.pontuation--;
                console.log(team2.pontuation);
            }
        }
        if (team1.pontuation === 0) {
            io.emit("end", "team2");
        } else if (team2.pontuation === 0) {
            io.emit("end", "team1");
        }
    })

    socket.on("up", (id) => {
        console.log(id);
        socket.broadcast.emit("up", id)
    })

    socket.on("randomPipeTop", () => {
        let top = Math.floor(Math.random() * (200 - 50 + 1) + 50);
        console.log(top);
        io.emit("randomPipeTop", top);
    })

    socket.on("randomPipeBottom", () => {
        let bottom = Math.floor(Math.random() * (200 - 50 + 1) + 50);
        console.log(bottom);
        io.emit("randomPipeBottom", bottom);
    })
})


httpServer.listen(3333);