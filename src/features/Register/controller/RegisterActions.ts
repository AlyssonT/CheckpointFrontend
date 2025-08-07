import { getMe } from "../../RootPage/service/rootServices";
import { registerSchema } from "../models/registerModels";
import { RegisterUser } from "../service/registerServices";
import * as z from "zod/v4";

export async function registerUserAction({ request }: { request: Request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const result = registerSchema.safeParse(data);
    if (!result.success) {
      return {
        success: false,
        errors: z.treeifyError(result.error).errors,
      };
    }

    await RegisterUser(result.data);
    const userData = await getMe();

    return {
      success: true,
      message: "Registration successful.",
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
