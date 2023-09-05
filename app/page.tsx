'use client'

import {io, Socket} from "socket.io-client"
import {Button} from "@mui/material";
export default function Home() {

    const socketURL = 'http://localhost:4000';


    let socket: Socket | null;
    return (
        <div>
          <h1>Pointing Poker</h1>

          <Button variant="outlined" onClick={() => {
            if (!socket) {
              socket = io(socketURL)
            }
          }}>Connect</Button>
          <Button variant="outlined" onClick={() => {
            if (socket?.connected) {
              socket.disconnect();
              socket = null;
            }
          }}>Disconnect</Button>
        </div>
    );
};