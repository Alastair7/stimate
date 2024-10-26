import { socket } from "../../shared/ws-client/wsClient";

export const hasSessionUsername = () =>
  window.sessionStorage.getItem("nickname") ? false : true;

export const getSessionUsername = () =>
  window.sessionStorage.getItem("nickname");

export const sendCreateRoomEvent = () => {
  socket.emit("createRoom");
};
