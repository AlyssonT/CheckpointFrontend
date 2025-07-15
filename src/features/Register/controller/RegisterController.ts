import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useSubmit,
  useActionData,
  useNavigation,
  useNavigate,
} from "react-router";
import { ToastContext } from "../../../contexts/Toast/ToastContext";
import type { ActionData } from "../../../types/actions";
import { type RegisterForm, registerSchema } from "../models/registerModels";
import { jwtDecode } from "jwt-decode";
import { useAuthStore, type UserData } from "../../../stores/authStore";

export function useRegisterController() {
  const { register, handleSubmit, formState } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });
  const login = useAuthStore((state) => state.login);

  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state !== "idle";

  const { openToast } = useContext(ToastContext);

  const submit = useSubmit();
  const onSubmit = (data: RegisterForm) => {
    submit(data, {
      method: "post",
      action: "/register",
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
    onSubmit,
    isSubmitting,
    formState,
  };
}
