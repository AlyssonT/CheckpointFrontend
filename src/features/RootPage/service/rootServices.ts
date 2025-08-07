import {
  api,
  throwErrorWithAPIMessage,
  type APIResponse,
} from "../../../services/api";
import type { UserData } from "../../../stores/authStore";

export async function getMe() {
  try {
    const response = await api.get<APIResponse<UserData>>("/me");
    return response.data.data;
  } catch (error) {
    throwErrorWithAPIMessage(error);
  }
}
