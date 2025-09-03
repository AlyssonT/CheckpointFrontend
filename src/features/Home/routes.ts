import { createElement, lazy } from "react";
import type { RouteObject } from "react-router";
import { HomeLoader } from "./controller/HomeLoaders";

const Home = lazy(() => import("./index").then((m) => ({ default: m.Home })));

export const homeRoutes: RouteObject[] = [
  {
    path: "/home",
    element: createElement(Home),
    loader: HomeLoader,
  },
];
