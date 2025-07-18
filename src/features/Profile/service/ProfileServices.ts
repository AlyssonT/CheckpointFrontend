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
