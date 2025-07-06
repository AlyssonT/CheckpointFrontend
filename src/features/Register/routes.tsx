import { lazy } from "react";
import type { RouteObject } from "react-router";
import { RegisterUser } from "./service/registerServices";
import { registerSchema } from "./models/registerModels";
import * as z from "zod/v4";

const Register = lazy(() =>
  import("./index").then((m) => ({ default: m.Register })),
);

export const registerRoutes: RouteObject[] = [
  {
    path: "/register",
    element: <Register />,
    action: async ({ request }) => {
      try {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);

        const result = registerSchema.safeParse(data);
        if (!result.success) {
          return {
            success: false,
            status: 400,
            errors: z.treeifyError(result.error),
          };
        }

        const message = await RegisterUser(result.data);

        return {
          success: true,
          status: 200,
          message,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
          };
        } else {
          return {
            sucess: false,
            message: "putz",
          };
        }
      }
    },
  },
];
