import type { Params } from "react-router";
import { GetGameById, GetGameReviews } from "../service/GamesServices";
import { GetUserGameReviewById } from "../../Profile/service/ProfileServices";
import { useAuthStore } from "../../../stores/authStore";

export async function gamePageLoader({
  params,
  request,
}: {
  params: Params;
  request: Request;
}) {
  const gameId = parseInt(params.gameId ?? "");

  const url = new URL(request.url);
  const page = url.searchParams.get("page") || "1";
  const pageSize = url.searchParams.get("pageSize") || "10";

  if (!isNaN(gameId)) {
    const resolvedPromises = await Promise.all([
      GetGameById(gameId),
      GetGameReviews(gameId, {
        page: parseInt(page),
        pageSize: parseInt(pageSize),
      }),
      GetUserGameReviewById(useAuthStore.getState().user.name, gameId),
    ]);

    return {
      gameData: resolvedPromises[0],
      reviewsData: resolvedPromises[1],
      userReviewData: resolvedPromises[2],
    };
  }
}
