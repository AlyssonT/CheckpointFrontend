import { useForm } from "react-hook-form";
import { loginSchema, type LoginForm } from "../model/loginModels";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useActionData,
  useNavigate,
  useNavigation,
  useSubmit,
} from "react-router";
import type { ActionData } from "../../../types/actions";
import { useContext, useEffect } from "react";
import { ToastContext } from "../../../contexts/Toast/ToastContext";
import { useAuthStore, type UserData } from "../../../stores/authStore";
import { jwtDecode } from "jwt-decode";

export function useLoginController() {
  const { register, handleSubmit, formState } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });
  const login = useAuthStore((state) => state.login);

  const { openToast } = useContext(ToastContext);

  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state !== "idle";

  const submit = useSubmit();
  const onSubmit = (data: LoginForm) => {
    submit(data, {
      method: "post",
      action: "/login",
    });
  };

  const actionData = useActionData() as ActionData<string>;
  useEffect(() => {
    if (!actionData) return;
    if (actionData.success) {
      openToast(actionData.message ?? "");
      const payload = jwtDecode<Omit<UserData, "token">>(actionData.data);
      login({
        name: payload.name,
        email: payload.email,
        id: payload.id,
        exp: payload.exp,
        token: actionData.data,
      });
      navigate("/");
    } else {
      openToast(actionData.error ?? "", "error");
    }
  }, [actionData, openToast]);

  return {
    register,
    handleSubmit,
    formState,
    onSubmit,
    isSubmitting,
  };
}
