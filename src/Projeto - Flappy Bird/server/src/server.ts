import express from "express";
import socketio from "socket.io";
import http from "http";
import path from "path";

const users = []

const app = express();
const httpServer = http.createServer(app);
const io = new socketio.Server(httpServer);

app.use(express.static(path.resolve(__dirname, '../../')))

io.on("connection", (socket) => {
    console.log(`New connection: ${socket.id}`)

    users.push(socket.id);

    if(users.length === 4) {
        console.log("partida com todos os players");
        socket.broadcast.emit("start");
        socket.emit("start")
    }
})

httpServer.listen(3333);