import { nanoid } from "nanoid";
import { socket, SocketSession } from "../../shared/ws-client/wsClient";

export const hasSessionUsername = () =>
  window.sessionStorage.getItem("nickname") ? false : true;

export const getSessionUsername = () =>
  window.sessionStorage.getItem("nickname");

export const sendCreateRoomEvent = () => {
  socket.emit("createRoom");
};

export const CreateSession = (): SocketSession => {
  const session = new SocketSession();
  if (!session.socket.connected) {
    session.socket.connect();
  }

  const roomCode = nanoid(7);
  socket.emit("createSession", roomCode);

  session.roomId = roomCode;

  return session;
};
