import { lazy } from "react";
import type { RouteObject } from "react-router";
import { registerUserAction } from "./controller/RegisterActions";

const Register = lazy(() =>
  import("./index").then((m) => ({ default: m.Register })),
);

export const registerRoutes: RouteObject[] = [
  {
    path: "/register",
    element: <Register />,
    action: registerUserAction,
  },
];
