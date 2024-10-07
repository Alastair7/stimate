import { Server as HttpServer } from "http";
import { Server } from "socket.io";
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

    wsServer.on("connection", async (socket) => {
      const roomCode = generateRoomCode();
      console.log("User connected to the server.");

      socket.on("roomCreation", async () => {
        console.log("Joining socket to room:", roomCode);
        await socket.join(roomCode);
        socket.emit("roomCreated", roomCode);
      });

      socket.on("roomJoin", async (data) => {
        const { room } = data;
        console.log("Joining room", room);

        await socket.join(room);
      });
    });
  }
}

export default WebsocketServer;
