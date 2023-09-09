'use client'

import {io, Socket} from "socket.io-client"
import {Button} from "@mui/material";
import {useState} from "react";

interface User {
    name: string,
    points: number
}

export default function Home() {

    const [connectedUsers, setConnectedUsers] = useState<User[] | []>([]);

    const socketURL = 'http://localhost:4000';
    let socket: Socket | null;
    function connectSocket() {
        if (!socket?.connected) {
            socket = io(socketURL)
        }
    }

    function disconnectSocket() {
        if (socket?.connected) {
            socket.disconnect();
        }
    }
    return (
        <div>
          <Button variant="outlined" onClick={connectSocket}>Connect</Button>
          <Button variant="outlined" onClick={disconnectSocket}>Disconnect</Button>

            {connectedUsers.map((user, index) => {
                return <p key={index}>{user.name} - {user.points}</p>
            })}
        </div>
    );
};