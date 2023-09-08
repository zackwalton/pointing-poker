'use client'
import {io} from "socket.io-client";

interface Props {
    params: {
        room: string
    },
    roomName: string
}


export default function PointingRoom({ params }: Props) {
    const room = params.room;
    if (!room) {
        return (<p>Error: Missing room ID</p>)
    }
    console.log(params);

    return (
        <div>
            {room}
        </div>
    )
}