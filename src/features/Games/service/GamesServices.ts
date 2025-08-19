import {
  api,
  throwErrorWithAPIMessage,
  type APIResponse,
} from "../../../services/api";
import type { PaginationOptions } from "../../../types/pagination";
import type {
  GetGameByIdResponse,
  GetGameReviewsResponse,
  GetGamesResponse,
} from "../models/gameModels";

export async function GetListGames(
  query?: string | null,
  pagination?: PaginationOptions,
) {
  try {
    const response = await api.get<APIResponse<GetGamesResponse>>("/games", {
      params: { query, page: pagination?.page, pageSize: pagination?.pageSize },
    });
    return response.data.data;
  } catch (error) {
    throwErrorWithAPIMessage(error);
  }
}

export async function GetGameById(gameId: number) {
  try {
    const response = await api.get<APIResponse<GetGameByIdResponse>>(
      `/games/${gameId}`,
    );
    return response.data.data;
  } catch (error) {
    throwErrorWithAPIMessage(error);
  }
}

export async function GetGameReviews(
  gameId: number,
  pagination?: PaginationOptions,
) {
  try {
    const response = await api.get<APIResponse<GetGameReviewsResponse>>(
      `/games/${gameId}/reviews`,
      { params: { page: pagination?.page, pageSize: pagination?.pageSize } },
    );
    return response.data.data;
  } catch (error) {
    throwErrorWithAPIMessage(error);
  }
}
