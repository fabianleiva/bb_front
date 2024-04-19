import axios from "axios";
import { storeBulkBuddies } from "../state/state"

const { isAuth } = storeBulkBuddies();

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && isAuth) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);