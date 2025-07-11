import {
  api,
  throwErrorWithAPIMessage,
  type APIResponse,
} from "../../../services/api";
import type { IPostLogin } from "../model/loginModels";

export async function LoginUser(loginData: IPostLogin) {
  try {
    const response = await api.post<APIResponse<string>>("/login", loginData);
    return response.data;
  } catch (err) {
    throwErrorWithAPIMessage(err);
  }
}
