'use client'
import {io} from "socket.io-client";

interface Props {
    params: {
        room: string
    }
}


export default function PointingRoom({ params }: Props) {
    const room = params.room;
    if (!room) {
        return (<p>Error: Missing room ID</p>)
    }
    console.log(params);

    const socketURL = 'http://localhost:4000'

    const socket = io(socketURL);


    return (
        <div>
            {room}
        </div>
    )
}