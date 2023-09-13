"use client"
import {io} from "socket.io-client";
import useSWR from "swr";
import {useState} from "react";

interface Props {
    params: {
        id: string
    }
}

const VotingSystems = {
    "fibonacci": [0, 1, 3, 5, 8, 13, 21, 34, 55, 89, '?', '☕'],
    "fibonacci-modified": [0, '½', 1, 3, 5, 8, 13, 20, 40, 100, '?', '☕'],
    "t-shirts": ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', '?', '☕'],
    "2powers": [0, 1, 2, 4, 8, 16, 32, 64, '?', '☕']
}

export interface Room {
    id: string,
    name: string,
    votingSystem: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PointingRoom({params}: Props) {
    const id = params.id;

    // hook to fetch data about room
    const {data, error, isLoading, mutate} = useSWR<Room>(`/api/rooms/${id}`, fetcher)
    const [dialogOpen, setDialogOpen] = useState(true);
    const [username, setUsername] = useState('username');

    if (!id) {
        return (<p>Error: Missing room ID.</p>)
    }

    if (error || (!isLoading && !data)) return <div>Error: Failed to fetch data.</div>
    if (!data) return <div>loading...</div>
    const room: Room = data;

    // connect to socket and sent join event
    const socketURL = 'http://localhost:4000';
    const socket = io(socketURL);
    socket.emit("add-to-room", {room: id, name: username});
    socket.on("joined-room", (data) => {
        console.log(data);
    });
    return (
        <div>
            {id}
            {room.id}
        </div>
    )
}