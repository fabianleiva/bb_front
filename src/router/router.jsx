import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Route";
import { HomePage } from "../pages/Common/Home";
import { MainLayout } from "../layouts/MainLayout";
import { LoginPage } from "../pages/Auth/LoginPage";
import { Register } from "../pages/Auth/Register";
import { Explore } from "../pages/Posts/Explore";
import { Info } from "../pages/Common/Info";
import { Post } from "../pages/Posts/Post";
import { Publish } from "../pages/Posts/Publish";
import { MyProfile } from "../pages/Users/MyProfile";
import { NotFound } from "../pages/Common/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      /// Auth Routes
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "info",
        element: <Info />,
      },
      {
        path: "posts",
        element: <MainLayout />,
        children: [
          {
            path: "explore",
            element: <Explore />,
          },
          {
            path: "publish",
            element: <Publish />,
          },
          {
            path: "post",
            element: <Post />,
          },
        ],
      },
      {
        path: "auth",
        element: <MainLayout />,
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
      {
        path: "user",
        element: <MainLayout />,
        children: [
          {
            path: "profile",
            element: <MyProfile />,
          },
          {
            path: "bulkings",
            element: <MyProfile />,
          },
        ],
      },
    ],
  },
]);
