import * as z from "zod/v4";
import { loginSchema } from "../model/loginModels";
import { LoginUser } from "../service/loginServices";

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

    const responseData = await LoginUser(result.data);
    const token = responseData?.data;

    return {
      success: true,
      message: responseData?.message ?? "Login successful. Welcome.",
      data: token,
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
