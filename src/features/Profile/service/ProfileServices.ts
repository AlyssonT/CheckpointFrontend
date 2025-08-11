import {
  api,
  throwErrorWithAPIMessage,
  type APIResponse,
} from "../../../services/api";
import type { IGetProfile } from "../model/ProfileModels";

export async function getUserProfile() {
  try {
    const response = await api.get<APIResponse<IGetProfile>>("/user/profile");
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
