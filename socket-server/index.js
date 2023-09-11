const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {origin: "*"}
});

io.on('connection', (socket) => {
  console.log('Connected: ' + socket.id);
  socket.on('disconnect', () => {
    console.log('Disconnected: ' + socket.id);
  });
  socket.on("check-room", (room) => {
    const existingRoom = io.of("/").adapter.rooms.get(room.toString())
    socket.on(room.toString()).emit(`room-${room}-exists`, existingRoom)
  })
  socket.on("user-join-room", (room) => {
    const existingRoom = io.of("/").adapter.rooms.get(room.toString())
    socket.join(room);
    socket.to(room).emit("user-join-room", existingRoom);
  })
});

io.of('/').adapter.on("create-room", (room) => {
  console.log(`+ Created room ${room} `);
});

io.of('/').adapter.on("join-room", (room, id) => {
  console.log(`Socket ${id} -> Room ${room}`);
});

server.listen(4000, () => {
  console.log('Listening for connections on port 4000');
});