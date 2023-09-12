"use client"
import {io} from "socket.io-client";
import useSWR from "swr";
import {useState} from "react";

interface Props {
    params: {
        id: string
    }
}

export interface Room {
    id: string,
    name: string,
    votingSystem: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PointingRoom({params}: Props) {
    const id = params.id;

    if (!id) {
        return (<p>Error: Missing room ID.</p>)
    }

    const {data, error, isLoading, mutate} = useSWR<Room>(`/api/rooms/${id}`, fetcher)
    const [dialogOpen, setDialogOpen] = useState(true);
    const [username, setUsername] = useState('');

    if (error || (!isLoading && !data)) return <div>Error: Failed to fetch data.</div>
    if (!data) return <div>loading...</div>
    const room: Room = data;


    const handleClickOpen = () => {
        setDialogOpen(true);
    };

    const handleClose = () => {
        setDialogOpen(false);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    return (
        <>
            <div className={"w-full h-full"}></div>
            <div className={"absolute bg-black w-96 h-auto aspect-square top-1/4 left-1/2 transform"}
                 style={{transform: "translate(-50%, 0)"}}></div>
        </>
    );

    // connect to socket and sent join event
    const socketURL = 'http://localhost:4000';
    const socket = io(socketURL);


    return (
        <div>
            {id}
            {room.id}
        </div>
    )
}