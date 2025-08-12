import { createElement, lazy } from "react";
import type { RouteObject } from "react-router";
import { GetListGames } from "./service/GamesServices";

const ListGames = lazy(() =>
  import("./index").then((m) => ({ default: m.ListGames })),
);

export const gamesRoutes: RouteObject[] = [
  {
    path: "/search",
    element: createElement(ListGames),
    loader: async ({ request }) => {
      const url = new URL(request.url);
      const query = url.searchParams.get("query");
      return await GetListGames(query);
    },
  },
];
