import {
  api,
  throwErrorWithAPIMessage,
  type APIResponse,
} from "../../../services/api";
import type { PaginationOptions } from "../../../types/pagination";
import type { GetGamesResponse } from "../models/gameModels";

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
