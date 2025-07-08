import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSubmit, useActionData, useNavigation } from "react-router";
import { ToastContext } from "../../../contexts/Toast/ToastContext";
import type { ActionData } from "../../../types/actions";
import { type RegisterForm, registerSchema } from "../models/registerModels";

export function useRegisterController() {
  const { register, handleSubmit, formState } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    reValidateMode: "onBlur",
  });

  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  const { openToast } = useContext(ToastContext);

  const submit = useSubmit();
  const onSubmit = (data: RegisterForm) => {
    submit(data, {
      method: "post",
      action: "/register",
    });
  };

  const actionData = useActionData() as ActionData;
  useEffect(() => {
    if (!actionData) return;
    if (actionData.success) {
      openToast(actionData.message ?? "");
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
