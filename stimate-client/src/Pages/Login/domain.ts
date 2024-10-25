import { socket } from "../../shared/ws-client/wsClient";

export const setUsername = (nickname: string) => {
  window.sessionStorage.setItem("nickname", nickname);
};

export const sendCreateRoomEvent = () => {
  socket.emit("createRoom");
};
