import { lazy } from "react";
import type { RouteObject } from "react-router";

const Register = lazy(() =>
  import("./index").then((m) => ({ default: m.Register })),
);

export const registerRoutes: RouteObject[] = [
  {
    path: "/register",
    element: <Register />,
  },
];
