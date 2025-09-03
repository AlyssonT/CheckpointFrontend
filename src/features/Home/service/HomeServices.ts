import {
  api,
  throwErrorWithAPIMessage,
  type APIResponse,
} from "../../../services/api";
import type {
  LatestReviewsResponse,
  TopGamesResponse,
} from "../models/HomeModels";

export async function GetTopGames() {
  try {
    const response = await api.get<APIResponse<TopGamesResponse>>(
      "/games/rankings/top",
    );
    return response.data.data;
  } catch (error) {
    throwErrorWithAPIMessage(error);
  }
}

export async function GetLatestReviews() {
  try {
    const response = await api.get<APIResponse<LatestReviewsResponse>>(
      "/reviews/latest",
    );
    return response.data.data;
  } catch (error) {
    throwErrorWithAPIMessage(error);
  }
}
