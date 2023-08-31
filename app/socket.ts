import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, { /* options */ });

console.log('creating socket')
io.on("connection", (socket) => {
  console.log('connected')
});

httpServer.listen(3000);