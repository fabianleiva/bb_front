import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

export const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen" >

        <div className="flex-0">
          <Navbar />
        </div>

        <div className="flex-1">
          <Outlet />
        </div>

        <div className="flex-0">

          <Footer />
        </div>
      </div>
    </>
  );
};
