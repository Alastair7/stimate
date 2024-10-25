import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../Pages/Home/HomePage";
import { Session } from "../Pages/Session/Session";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sessions",
    element: <Session />,
  },
]);
