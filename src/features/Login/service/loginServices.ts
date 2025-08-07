import { api, throwErrorWithAPIMessage } from "../../../services/api";
import type { IPostLogin } from "../model/loginModels";

export async function LoginUser(loginData: IPostLogin) {
  try {
    await api.post("/login", loginData);
  } catch (err) {
    throwErrorWithAPIMessage(err);
  }
}
