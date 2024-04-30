import { useLocation, Navigate, Outlet } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { storeBulkBuddies } from "./state/state";
import { useEffect } from "react";

export const Root = () => {
  const {alert} = storeBulkBuddies();
  const { pathname } = useLocation();

  useEffect(() => {
    if (alert.type === "error") {
      toast.error(alert.message);
    }
    if (alert.type === "success") {
      toast.success(alert.message);
    }
  }, [alert]);

  if (pathname === "/") {
    return <Navigate to="/home" />;
  }

  //FUNCION ISAUTH CUANDO RECARGA

  return (
    <main className="min-h-[100vh]">
      <Toaster richColors />
      <Outlet />
    </main>
  );
};
