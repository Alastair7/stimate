import { createServer } from "http";
import WebsocketServer from "./websocket/wsServer.ts";

const server = createServer();
const wsServer = new WebsocketServer("http://localhost:5173");

wsServer.start(server);

server.listen(3000, () => {
  console.log("websocket server running at http:localhost:3000");
});
