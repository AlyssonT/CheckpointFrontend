import { z } from "zod/v4";
import {
  INVALID_EMAIL_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
} from "../../../utils/validationMessages";

export const loginSchema = z.object({
  email: z.email(INVALID_EMAIL_MESSAGE),
  password: z.string().min(6, INVALID_PASSWORD_MESSAGE),
});

export type LoginForm = z.infer<typeof loginSchema>;

export type IPostLogin = LoginForm;
