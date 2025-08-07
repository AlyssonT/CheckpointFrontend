import { api, throwErrorWithAPIMessage } from "../../../services/api";
import type { IPostRegister } from "../models/registerModels";

export async function RegisterUser(userData: IPostRegister) {
  try {
    await api.post("/users", userData);
  } catch (err) {
    throwErrorWithAPIMessage(err);
  }
}
