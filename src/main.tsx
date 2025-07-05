import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-primary min-h-screen">
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
);
