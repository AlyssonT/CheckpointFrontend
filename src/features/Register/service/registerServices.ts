import {
  api,
  throwErrorWithAPIMessage,
  type APIResponse,
} from "../../../services/api";
import type { IPostRegister } from "../models/registerModels";

export async function RegisterUser(userData: IPostRegister) {
  try {
    const response = await api.post<APIResponse<string>>("/users", userData);
    return response.data;
  } catch (err) {
    throwErrorWithAPIMessage(err);
  }
}
