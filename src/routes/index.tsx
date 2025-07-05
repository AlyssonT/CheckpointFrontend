import { createBrowserRouter } from "react-router";
import { RootPage } from "../features/RootPage";
import { loginRoutes } from "../features/Login/routes";
import { registerRoutes } from "../features/Register/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [...loginRoutes, ...registerRoutes],
  },
]);
