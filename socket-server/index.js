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
  socket.on("add-to-room", (data) => {
    console.log()
    socket.join(data.id);
    socket.on(data.id).emit("joined-room", data)
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