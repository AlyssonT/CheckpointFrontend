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

  const actionData = useActionData() as ActionData<UserData>;
  useEffect(() => {
    if (!actionData) return;
    if (actionData.success) {
      openToast(actionData.message ?? "");
      const userData = actionData.data;
      login({
        name: userData.name,
        email: userData.email,
        id: userData.id,
        exp: userData.exp,
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
