import axios from "axios";
import {
  api,
  throwErrorWithAPIMessage,
  type APIResponse,
} from "../../../services/api";
import type {
  GetUserReviewsResponse,
  IGetProfile,
  UserGameReview,
} from "../model/ProfileModels";

export async function getUserProfile(username: string) {
  try {
    const response = await api.get<APIResponse<IGetProfile>>(
      `/user/${username}/profile`,
    );
    return response.data;
  } catch (e) {
    throwErrorWithAPIMessage(e);
  }
}

export async function putUserProfile(bio: string) {
  const formData = new FormData();
  formData.append("bio", bio);

  try {
    await api.put("/user/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    throwErrorWithAPIMessage(error);
  }
}

export async function GetReviewsFromUser(username: string) {
  try {
    const response = await api.get<APIResponse<GetUserReviewsResponse>>(
      `user/${username}/games`,
    );
    return response.data.data;
  } catch (error) {
    throwErrorWithAPIMessage(error);
  }
}

export async function GetUserGameReviewById(gameId: number) {
  try {
    const response = await api.get<APIResponse<UserGameReview>>(
      `user/games/${gameId}`,
    );
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    throwErrorWithAPIMessage(error);
  }
}
