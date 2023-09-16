"use client"
import {io} from "socket.io-client";
import {useEffect, useState} from "react";

interface Props {
    params: {id: string},
    searchParams: { [key: string]: string | string[] | undefined }
}

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

const VotingSystems = {
    "fibonacci": [0, 1, 3, 5, 8, 13, 21, 34, 55, 89, '?', '☕'],
    "fibonacci-modified": [0, '½', 1, 3, 5, 8, 13, 20, 40, 100, '?', '☕'],
    "t-shirts": ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', '?', '☕'],
    "2powers": [0, 1, 2, 4, 8, 16, 32, 64, '?', '☕']
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PointingRoom({params, searchParams}: Props) {
    const id = params.id;
    // hook to fetch data about room
    // const {data, error, isLoading, mutate} = useSWR<Room>(`/api/rooms/${id}`, fetcher)
    const [username, setUsername] = useState<string>('Guest');
    const [selectedPoints, setSelectedPoints] = useState<string|null>(null);

    const [roomName, setRoomName] = useState<string>(searchParams.name as string ?? 'Default name from state.');
    const [votingSystem, setVotingSystem] = useState<string>(searchParams.votingSystem as string ?? 'fibonacci');
    const [connectedClients, setConnectedClients] = useState<[string]|[]>([])

    useEffect(() => {
        // remove query parameters
        window.history.replaceState(null, '', window.location.pathname);
    }, [])
    if (!id) return (<p>Error: Missing room ID.</p>)


    // connect to socket and sent join event
    const socketURL = 'http://localhost:4000'
    const socket = io(socketURL);
    console.log(socket.id);
    socket.emit("add-to-room", {
        room: {roomID: id, name: roomName, votingSystem: votingSystem} as Room,
        client: {id: socket.id, name: username, points: selectedPoints} as Client});
    socket.on("roomData", (data) => {
        console.log(data);
    });
    return (
        <div>
            <h1>{roomName}</h1>
        </div>
    )
}