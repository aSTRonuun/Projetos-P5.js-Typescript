import express from "express";
import socketio from "socket.io";
import http from "http";
import path from "path";

const users = []
const team1 = []
const team2 = []

const app = express();
const httpServer = http.createServer(app);
const io = new socketio.Server(httpServer);

app.use(express.static(path.resolve(__dirname, '../../')))

function sepateTeam(team1, team2) {
    users.sort();
    for(let i = 0; i < 2; i++) {
        team1.push(users[i].id);
    }
    for(let i = 2; i < 4; i++) {
        team2.push(users[i].id);
    }
}

function handleLose() {
    if(team1.length == 0) {
        console.log("team1 perdeu");
    }else {
        console.log("time2 perdeu");
    }
}

io.on("connection", (socket) => {

    users.push(socket);

    if(users.length !== 4) {
        console.log(`Esperando outros jogadores ${users.length}/2}`)
    } else if (users.length === 4) {
        console.log(`Esperando outros jogadores ${users.length}/2}`)
        console.log("jogo iniciado")
        sepateTeam(team1, team2);
        io.emit("start");
        
    }
    socket.on("hit", (id) => {
        let index = team1.indexOf(id);
        if(index > -1) {
            team1.splice(index, 1);
        }
        index = team2.indexOf(id);
        if(index > -1) {
            team2.splice(index, 1);
        }
        handleLose();
    })
 
    socket.broadcast

    for(let user of users) {
        user.broadcast.emit("newPlayer")
    }

    
})


httpServer.listen(3333);