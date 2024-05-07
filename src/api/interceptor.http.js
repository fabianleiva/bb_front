import axios from "axios";
import { BASE_URL } from "./urls";

axios.defaults.baseURL = BASE_URL;

export const axiosInterceptor = () => {
  const addToken = (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  };

  const addCredential = (config) => {
    config.withCredentials = true;
    return config;
  };

  axios.interceptors.request.use(
    (config) => {
      config = addCredential(config);
      return addToken(config);
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 400) {
        console.log("Error 400");
      }
      if (error.response.status === 401) {
        console.log("Error 401");
        // window.location.href = "/auth/login";
      }
      return Promise.reject(error);
    }
  );
};

export const axiosPrivate = axios.create({
  baseURL: axios.defaults.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
