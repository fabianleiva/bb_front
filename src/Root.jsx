import { useLocation, Navigate, Outlet } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { storeBulkBuddies } from "./state/state";
import { useEffect } from "react";

export const Root = () => {
  const alert = storeBulkBuddies(state => state.alert);
  const setUser = storeBulkBuddies(state => state.setUser);
  const setIsAuth = storeBulkBuddies(state => state.setIsAuth)
  const token = localStorage.getItem('token')
  if (localStorage.getItem("user")) {
    setUser(JSON.parse(localStorage.getItem("user")));
    setIsAuth(true, token)
  }

  const { pathname } = useLocation();

  useEffect(() => {
    if (alert.type === "error") {
      toast.error(alert.message);
    }
    if (alert.type === "success") {
      toast.success(alert.message);
    }
    if (alert.type === "warning") {
      toast.success(alert.message);
    }
    if (alert.type === "info") {
      toast.success(alert.message);
    }
  }, [alert]);

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
