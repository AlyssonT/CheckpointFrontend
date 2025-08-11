import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { type RegisterForm, registerSchema } from "../models/registerModels";
import { useAuthStore, type UserData } from "../../../stores/authStore";
import { useActionController } from "../../../hooks/useActionController";

export function useRegisterController() {
  const { register, handleSubmit, formState } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });
  const login = useAuthStore((state) => state.login);

  const navigate = useNavigate();
  const { isSubmitting, onSubmit } = useActionController<
    RegisterForm,
    UserData
  >({
    method: "post",
    action: "/register",
    onSuccess: (userData: UserData) => {
      login({
        name: userData.name,
        email: userData.email,
        id: userData.id,
        exp: userData.exp,
      });
      navigate("/");
    },
  });

  return {
    register,
    handleSubmit,
    onSubmit,
    isSubmitting,
    formState,
  };
}
