import { createElement, lazy } from "react";
import type { RouteObject } from "react-router";
import { loginAction } from "./controller/LoginActions";

const Login = lazy(() => import("./index").then((m) => ({ default: m.Login })));

export const loginRoutes: RouteObject[] = [
  {
    path: "/login",
    element: createElement(Login),
    action: loginAction,
  },
];
