'use client'
import {io} from "socket.io-client";

interface Props {
    params: {
        room: number
    }
}


export default function PointingRoom({ params }: Props) {
    const room = params.room;
    if (!room) {
        return (<p>Error: Missing room ID</p>)
    }
    if (isNaN(room)) {
        return (<p>Error: Invalid room ID</p>)
    }
    const socketURL = 'http://localhost:4000';

    const socket = io(socketURL);
    // Join room (server-side only)
    socket.emit("user-join-room", room)
    socket.on("user-joined", () => {
        console.log('user-join-room')
    })
    return (
        <div>
            {room}
        </div>
    )
}