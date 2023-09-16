const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server, {
    cors: {origin: "*"}
});

interface Room {
    roomID: string
    socketID: string
    name: string
    votingSystem: string
    connectedClients: [string]
}

interface Client {
    id: string
    name: string
    points: string | number
}

let rooms = new Map<string, Room>()
let clients = new Map<string, Client>()

io.on('connection', (socket: any) => {
    console.log('Connected: ' + socket.id);
    socket.on('disconnect', () => {
        console.log('Disconnected: ' + socket.id);
    });
    socket.on("add-to-room", (data: {room: Room, client: Client}) => {
        const room = rooms.get(data.room.roomID);
        if (!room) {
            rooms.set(data.room.roomID,
                {
                    name: data.room.name,
                    votingSystem: data.room.votingSystem,
                    connectedClients: [data.client.id]
                } as Room);
        } else {
            if (data.client.id !in room.connectedClients.keys())
            room.connectedClients.push(data.client.id);
        }
        clients.set(data.client.id, data.client);
        console.log(rooms)
        console.log(clients)
        // socket.join(data.room);
        // socket.to(data.room).emit("room-data", data)
    })
});

io.of('/').adapter.on("create-room", (room: string) => {
    console.log(`++ Created room (${room})`);
    console.log(rooms.get(room) ?? 'Room not in list')
});

io.of('/').adapter.on("delete-room", (room: string, id: string) => {
    console.log(`-- Deleted room ${room}`);
    console.log(rooms.get(room) ?? 'Room not in list')
});

io.of('/').adapter.on("join-room", (room: string, id: string) => {
    console.log(`+ Socket (${id}) joined Room ${room}`);
    console.log(clients.get(id) ?? 'Client not in list')
});

io.of('/').adapter.on("leave-room", (room: string, id: string) => {
    console.log(`- Socket (${id}) left Room ${room}`);
    console.log(clients.get(id) ?? 'Client not in list')
});

server.listen(4000, () => {
    console.log('Listening for connections on port 4000');
});