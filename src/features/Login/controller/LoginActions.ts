import * as z from "zod/v4";
import { loginSchema } from "../model/loginModels";
import { LoginUser } from "../service/loginServices";
import { getMe } from "../../RootPage/service/rootServices";

export async function loginAction({ request }: { request: Request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const result = loginSchema.safeParse(data);
    if (!result.success) {
      return {
        success: false,
        errors: z.treeifyError(result.error).errors,
      };
    }

    await LoginUser(result.data);
    const userData = await getMe();

    return {
      success: true,
      message: "Login successful.",
      data: userData,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    } else {
      return {
        sucess: false,
        error: "Unknown error.",
      };
    }
  }
}
