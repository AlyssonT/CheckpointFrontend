import { createElement, lazy } from "react";
import type { RouteObject } from "react-router";
import { getUserProfile } from "./service/ProfileServices";
import { updateProfileAction } from "./controller/ProfileActions";

const Profile = lazy(() =>
  import("./index").then((m) => ({ default: m.Profile })),
);

export const profileRoutes: RouteObject[] = [
  {
    path: "/profile",
    element: createElement(Profile),
    action: updateProfileAction,
    loader: async () => {
      return { profile: (await getUserProfile())?.data };
    },
  },
];
