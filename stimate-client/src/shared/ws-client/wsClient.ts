import { io, Socket } from "socket.io-client";

const URL = "ws://localhost:3000";
export const socket = io(URL, {
  autoConnect: false,
});
export let socketRoom = "";

export class SocketSession {
  socket: Socket;
  roomId: string;

  constructor() {
    this.socket = socket;
    this.roomId = "";
  }
}
