import * as z from "zod/v4";
import { INVALID_EMAIL_MESSAGE } from "../../../utils/validationMessages";

export const registerSchema = z
  .object({
    name: z.string().min(3, "Username must have at least 6 characters."),
    email: z.email(INVALID_EMAIL_MESSAGE),
    password: z.string().min(6, INVALID_EMAIL_MESSAGE),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type RegisterForm = z.infer<typeof registerSchema>;

export interface IPostRegister {
  name: string;
  email: string;
  password: string;
}
