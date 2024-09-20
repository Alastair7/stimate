import cors from "cors";
import Express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = Express();
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected.");
  });
});
server.listen(3000, () => {
  console.log("websocket server running at http:localhost:3000");
});
