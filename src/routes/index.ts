import { createBrowserRouter } from "react-router";
import { RootPage } from "../features/RootPage";
import { loginRoutes } from "../features/Login/routes";
import { registerRoutes } from "../features/Register/routes";
import { NotFoundPage } from "../components/NotFound";
import { profileRoutes } from "../features/Profile/routes";
import { createElement } from "react";
import { gamesRoutes } from "../features/Games/routes";
import { CircularFallback } from "../components/CircularFallback";
import { UnknownError } from "../components/UnknownError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(RootPage),
    HydrateFallback: () => createElement(CircularFallback, { full: true }),
    children: [
      ...loginRoutes,
      ...registerRoutes,
      ...profileRoutes,
      ...gamesRoutes,
      { path: "*", element: createElement(NotFoundPage) },
    ],
    errorElement: createElement(UnknownError),
  },
]);
