import { Outlet } from "react-router";
import { HeaderView } from "./HeaderView";
import { Toast } from "../../../components/Toast";
import { ToastContextProvider } from "../../../contexts/Toast/ToastProvider";
import { useVerifyExpiration } from "../../../hooks/useVerifyExpiration";
import { Suspense } from "react";
import { CircularFallback } from "../../../components/CircularFallback";

export function RootPageView() {
  useVerifyExpiration();

  return (
    <div className="bg-primary min-h-screen">
      <ToastContextProvider>
        <HeaderView />
        <Toast />
        <div className="pt-16">
          <Suspense fallback={<CircularFallback />}>
            <Outlet />
          </Suspense>
        </div>
      </ToastContextProvider>
    </div>
  );
}
