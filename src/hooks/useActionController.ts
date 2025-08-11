import { useContext, useEffect } from "react";
import { useNavigation, useSubmit, useActionData } from "react-router";
import { ToastContext } from "../contexts/Toast/ToastContext";
import type { ActionData } from "../types/actions";

export type UseActionControllerProps<TResponse> = {
  method: "post" | "put" | "delete";
  action: string;
  onSuccess?: (data: TResponse) => void;
};

export function useActionController<
  TForm extends Record<string, string>,
  TResponse,
>({ method, action, onSuccess }: UseActionControllerProps<TResponse>) {
  const { openToast } = useContext(ToastContext);

  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  const submit = useSubmit();
  const onSubmit = (data: TForm) => {
    submit(data, {
      method,
      action,
    });
  };

  const actionData = useActionData() as ActionData<TResponse>;
  useEffect(() => {
    if (!actionData) return;
    if (actionData.success) {
      openToast(actionData.message ?? "");
      const data = actionData.data as TResponse;
      onSuccess?.(data);
    } else {
      openToast(actionData.error ?? "", "error");
    }
  }, [actionData, openToast]);

  return {
    onSubmit,
    isSubmitting,
  };
}
