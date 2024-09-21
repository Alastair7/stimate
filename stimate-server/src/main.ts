import { createServer } from "http";
import { Server } from "socket.io";

const server = createServer();
const wsServer = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

wsServer.on("connection", (socket) => {
  console.log("User connected");
  socket.on("disconnect", () => {
    console.log("user disconnected.");
  });
});
server.listen(3000, () => {
  console.log("websocket server running at http:localhost:3000");
});
