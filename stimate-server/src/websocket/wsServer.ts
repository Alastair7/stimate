import { Server as HttpServer } from "http";
import { Server } from "socket.io";

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
      console.log("Socket connected to the server.");

      socket.on("createSession", async (roomCode) => {
        console.log("Joining socket to room:", roomCode);
        await socket.join(roomCode);
        console.log("Session was created");
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
