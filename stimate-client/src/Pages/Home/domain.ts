import { socket } from "../../shared/ws-client/wsClient";

export const hasSessionUsername = () =>
  window.sessionStorage.getItem("nickname") ? false : true;

export const sendCreateRoomEvent = () => {
  socket.emit("createRoom");
};
