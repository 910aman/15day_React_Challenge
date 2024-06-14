const express = require("express");
const cors = require('cors')
const http = require("http")
const app = express()
const { Server } = require("socket.io");


app.use(cors());

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    socket.on("send-message", (message) => {
        io.emit("received-message", message);
    })
    socket.on("disconnect", () => {
        console.log("Connection Disabled ");
    })
})
server.listen(5000, () => { console.log("Server running on port 5000"); })