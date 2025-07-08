import { useCallback, useMemo, useState, type ReactNode } from "react";
import {
  ToastContext,
  type ToastContextValues,
  type ToastData,
  type ToastType,
} from "./ToastContext";

export function ToastContextProvider({ children }: { children: ReactNode }) {
  const [toastData, setToastData] = useState<ToastData>({
    open: false,
    message: "",
    type: "success",
  });

  const openToast = useCallback((message: string, type?: ToastType) => {
    setToastData({
      open: true,
      message,
      type: type ?? "success",
    });
  }, []);

  const closeToast = useCallback(() => {
    setToastData((prev) => ({
      ...prev,
      open: false,
    }));
  }, []);

  const values: ToastContextValues = useMemo(
    () => ({
      toastData,
      openToast,
      closeToast,
    }),
    [closeToast, openToast, toastData],
  );

  return (
    <ToastContext.Provider value={values}>{children}</ToastContext.Provider>
  );
}
