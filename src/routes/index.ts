import { createBrowserRouter } from "react-router";
import { RootPage } from "../features/RootPage";
import { loginRoutes } from "../features/Login/routes";
import { registerRoutes } from "../features/Register/routes";
import { NotFoundPage } from "../components/NotFound";
import { profileRoutes } from "../features/Profile/routes";
import { createElement } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(RootPage),
    children: [
      ...loginRoutes,
      ...registerRoutes,
      ...profileRoutes,
      { path: "*", element: createElement(NotFoundPage) },
    ],
  },
]);
