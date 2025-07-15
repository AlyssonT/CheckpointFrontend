import { Outlet } from "react-router";
import { HeaderView } from "./HeaderView";
import { Toast } from "../../../components/Toast";
import { ToastContextProvider } from "../../../contexts/Toast/ToastProvider";
import { useVerifyToken } from "../../../hooks/useVerifyToken";

export function RootPageView() {
  useVerifyToken();

  return (
    <div className="bg-primary min-h-screen">
      <ToastContextProvider>
        <HeaderView />
        <Toast />
        <div className="pt-16">
          <Outlet />
        </div>
      </ToastContextProvider>
    </div>
  );
}
