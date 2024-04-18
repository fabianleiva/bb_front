import { useLocation, Navigate, Outlet } from "react-router-dom";

export const Root = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <Navigate to="/home" />;
  }

  return (
    <main className="min-h-[100vh]">
      <Outlet />
    </main>
  );
};
