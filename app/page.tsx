import { io } from "socket.io-client"
export default function Home() {

    const socketURL = 'http://localhost:4000';


    let socket = io(socketURL);
    socket.disconnect()

    return (
        <div>
            <h1>Pointing Poker</h1>
        </div>
    );
};