import { useLocation, Navigate, Outlet } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { storeBulkBuddies } from "./state/state";

export const Root = () => {
  const { alert } = storeBulkBuddies();
  const { pathname } = useLocation();

  if (alert.type === "error") {
    toast.error(alert.message);
  }
  if (alert.type === "success") {
    toast.success(alert.message);
  }

  if (pathname === "/") {
    return <Navigate to="/home" />;
  }

  return (
    <main className="min-h-[100vh]">
      <Toaster richColors />
      <Outlet />
    </main>
  );
};
