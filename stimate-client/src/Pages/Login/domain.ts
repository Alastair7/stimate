import { useNavigate } from "react-router-dom";

export const setUsername = (nickname: string) => {
  window.sessionStorage.setItem("nickname", nickname);
};

export const navToSessions = () => {
  const nav = useNavigate();

  nav("sessions");
};
