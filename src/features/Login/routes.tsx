import { lazy } from "react";
import type { RouteObject } from "react-router";

const Login = lazy(() => import("./index").then((m) => ({ default: m.Login })));

export const loginRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
];
