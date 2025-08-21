import { useContext, useEffect } from "react";
import { useFetcher } from "react-router";
import { ToastContext } from "../contexts/Toast/ToastContext";
import type { ActionData } from "../types/actions";

export type UseFetcherControllerProps<TResponse> = {
  method: "post" | "put" | "delete";
  action: string;
  onSuccess?: (data: TResponse) => void;
};

export function useFetcherController<
  TForm extends Record<string, any>,
  TResponse,
>({ method, action, onSuccess }: UseFetcherControllerProps<TResponse>) {
  const { openToast } = useContext(ToastContext);

  const fetcher = useFetcher<ActionData<TResponse>>();
  const isSubmitting = fetcher.state !== "idle";

  const onSubmit = (data: TForm) => {
    fetcher.submit(data, {
      method,
      action,
    });
  };

  useEffect(() => {
    if (!fetcher.data) return;

    if (fetcher.data.success) {
      openToast(fetcher.data.message ?? "");
      const data = fetcher.data.data as TResponse;
      onSuccess?.(data);
    } else {
      openToast(fetcher.data.error ?? "Unknown error.", "error");
    }
  }, [fetcher.data, openToast, onSuccess]);

  return {
    onSubmit,
    isSubmitting,
    fetcher,
  };
}
