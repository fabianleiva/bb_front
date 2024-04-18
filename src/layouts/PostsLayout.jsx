import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
export const PostsLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
