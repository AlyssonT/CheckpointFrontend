import { Outlet } from "react-router";
import { HeaderView } from "./HeaderView";

export function RootPageView() {
  return (
    <>
      <HeaderView />
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
}
