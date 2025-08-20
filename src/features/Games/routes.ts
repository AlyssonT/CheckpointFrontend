import { createElement, lazy } from "react";
import type { RouteObject } from "react-router";
import { GetListGames } from "./service/GamesServices";
import { gamePageLoader } from "./controller/GamePageLoader";
import { reviewPageAction } from "./controller/ReviewPageActions";

const ListGames = lazy(() =>
  import("./index").then((m) => ({ default: m.ListGames })),
);

const GamePage = lazy(() =>
  import("./index").then((m) => ({ default: m.GamePage })),
);

export const gamesRoutes: RouteObject[] = [
  {
    path: "/search",
    element: createElement(ListGames),
    loader: async ({ request }) => {
      const url = new URL(request.url);
      const query = url.searchParams.get("query");
      const page = url.searchParams.get("page") || "1";
      const pageSize = url.searchParams.get("pageSize") || "10";

      return await GetListGames(query, {
        page: parseInt(page),
        pageSize: parseInt(pageSize),
      });
    },
  },
  {
    path: "/games/:gameId",
    element: createElement(GamePage),
    loader: gamePageLoader,
    action: reviewPageAction,
  },
];
