import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Navigate } from 'react-router-dom';
import { storeBulkBuddies } from "../state/state";
export const AuthLayout = () => {

  const isAuth = storeBulkBuddies((state) => state.isAuth)

  return (
    <>
      <Navbar />
      {
        isAuth ? <Navigate to="/user/profile" /> : <Outlet />
      }
      <Outlet />
      <Footer />
    </>
  );
};
