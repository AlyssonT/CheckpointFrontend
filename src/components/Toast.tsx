import { useContext, useEffect } from "react";
import { ToastContext, type ToastType } from "../contexts/Toast/ToastContext";
import { Button } from "./Button";

const colorByType: Record<ToastType, string> = {
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
};

export function Toast() {
  const { toastData, closeToast } = useContext(ToastContext);

  useEffect(() => {
    if (toastData.open) {
      const timeout = setTimeout(() => {
        closeToast();
      }, 10000);
      return () => clearTimeout(timeout);
    }
  }, [closeToast, toastData.open]);

  const color = colorByType[toastData.type];

  return (
    <div
      className={`fixed flex justify-between items-center bottom-8 right-8 ${color} min-w-80 rounded shadow-lg px-4 py-2 ${
        toastData.open ? "pointer-events-auto" : "pointer-events-none"
      } transition-opacity duration-500 ${
        toastData.open ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="font-bold">
        {toastData.message.charAt(0).toLocaleUpperCase() +
          toastData.message.slice(1)}
      </p>
      <Button variant="ghost" noFocusRing onClick={closeToast}>
        OK
      </Button>
    </div>
  );
}
