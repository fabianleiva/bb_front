import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { axiosInterceptor } from "./api/interceptor.http";

axiosInterceptor();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
