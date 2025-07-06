import { api, throwErrorWithAPIMessage } from "../../../services/api";
import type { IPostRegister } from "../models/registerModels";

export async function RegisterUser(
  userData: IPostRegister,
): Promise<string | undefined> {
  try {
    const response = await api.post("/users", userData);
    return response.data.message;
  } catch (err) {
    throwErrorWithAPIMessage(err);
  }
}
