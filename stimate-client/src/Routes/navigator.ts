import { useNavigate } from "react-router-dom";

type Page = "login" | "session" | "none";
const nav = useNavigate();

export const navigateTo = (page: Page) => {
  if (page === "login") {
    nav("/login");
  }

  if (page === "session") {
    nav("/sessions");
  }
};
