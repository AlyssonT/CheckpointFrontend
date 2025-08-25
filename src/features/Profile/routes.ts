import { createElement, lazy } from "react";
import type { RouteObject } from "react-router";
import { updateProfileAction } from "./controller/ProfileActions";
import { profileLoader } from "./controller/ProfileLoader";

const Profile = lazy(() =>
  import("./index").then((m) => ({ default: m.Profile })),
);

export const profileRoutes: RouteObject[] = [
  {
    path: "/profile",
    element: createElement(Profile),
    action: updateProfileAction,
    loader: profileLoader,
  },
];
