import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Route";
import { HomePage } from "../pages/Common/Home";
import { MainLayout } from "../layouts/MainLayout";
import { LoginPage } from "../pages/Auth/LoginPage";
import { Register } from "../pages/Auth/Register";
import { RegisterComplete } from "../pages/Auth/RegisterComplete";
import { Explore } from "../pages/Posts/Explore";
import { Info } from "../pages/Common/Info";
import { Post } from "../pages/Posts/Post";
import { Publish } from "../pages/Posts/Publish";
import { MyProfile } from "../pages/Users/MyProfile";
import { Dashboard } from "../pages/Users/Dashboard";
import { NotFound } from "../pages/Common/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "info",
        element: <Info />,
      },
      {
        path: "about",
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
          {
            path: "register/success",
            element: <RegisterComplete />,
          },
        ],
      },
      {
        path: "user",
        element: <MainLayout />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
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
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
