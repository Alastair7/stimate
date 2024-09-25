import { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";
import { generateRoomCode } from "./domain.ts";

class WebsocketServer {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  start(httpServer: HttpServer) {
    const wsServer = new Server(httpServer, {
      cors: {
        origin: "http://localhost:5173",
      },
    });

    wsServer.on("connection", async (socket: Socket) => {
      const roomCode = generateRoomCode();
      console.log("User connected");
      socket.join(roomCode);
      console.log("Socket joined to room:", roomCode);
    });
  }
}

export default WebsocketServer;
