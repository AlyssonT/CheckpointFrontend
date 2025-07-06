import { Outlet } from "react-router";
import { HeaderView } from "./HeaderView";
import { Toast } from "../../../components/Toast";
import { ToastContextProvider } from "../../../contexts/Toast/ToastProvider";

export function RootPageView() {
  return (
    <>
      <ToastContextProvider>
        <HeaderView />
        <Toast />
        <div className="pt-16">
          <Outlet />
        </div>
      </ToastContextProvider>
    </>
  );
}
