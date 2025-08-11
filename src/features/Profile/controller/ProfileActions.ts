import { putUserProfile } from "../service/ProfileServices";

export async function updateProfileAction({ request }: { request: Request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    await putUserProfile(data.bio as string);

    return {
      success: true,
      message: "Profile updated successfully.",
      data: null,
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
