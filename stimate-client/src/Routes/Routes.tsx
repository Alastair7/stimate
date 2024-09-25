import { createBrowserRouter } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Session } from "../Pages/Session";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/session",
    element: <Session />,
  },
]);
