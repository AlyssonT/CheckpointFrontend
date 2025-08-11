import { useForm } from "react-hook-form";
import { loginSchema, type LoginForm } from "../model/loginModels";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { useAuthStore, type UserData } from "../../../stores/authStore";
import { useActionController } from "../../../hooks/useActionController";

export function useLoginController() {
  const { register, handleSubmit, formState } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });
  const login = useAuthStore((state) => state.login);

  const navigate = useNavigate();
  const { isSubmitting, onSubmit } = useActionController<LoginForm, UserData>({
    method: "post",
    action: "/login",
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
    formState,
    onSubmit,
    isSubmitting,
  };
}
