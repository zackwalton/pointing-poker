import Image from 'next/image'
import { io } from "socket.io-client";


export default function Home() {
  var socket = io.connect();
  return (
      <div>

      </div>
  )
}
