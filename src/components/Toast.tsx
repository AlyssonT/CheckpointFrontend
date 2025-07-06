import { useContext, useEffect } from "react";
import { ToastContext } from "../contexts/Toast/ToastContext";

export function Toast() {
  const { toastData, closeToast } = useContext(ToastContext);

  useEffect(() => {
    if (toastData.open) {
      const timeout = setTimeout(() => {
        closeToast();
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [closeToast, toastData.open]);

  const colorByType = "bg-" + toastData.type;

  return (
    <div
      className={`fixed bottom-8 right-8 ${colorByType} min-w-80 rounded shadow-lg px-4 py-2 ${
        toastData.open ? "pointer-events-auto" : "pointer-events-none"
      } transition-opacity duration-500 ${
        toastData.open ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="font-bold">
        {toastData.message.charAt(0).toLocaleUpperCase() +
          toastData.message.slice(1)}
      </p>
      <button onClick={closeToast}>fechar</button>
    </div>
  );
}
