import { createContext } from "react";

export type ToastType = "error" | "success" | "warning";

export type ToastData = {
  open: boolean;
  message: string;
  type: ToastType;
};

export interface ToastContextValues {
  openToast: (message: string, type?: ToastType) => void;
  closeToast: () => void;
  toastData: ToastData;
}

export const ToastContext = createContext({} as ToastContextValues);
