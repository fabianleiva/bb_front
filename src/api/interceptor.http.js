import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api/v1/";
// axios.defaults.baseURL = "https://bulkbuddies.onrender.com/api/v1/";

export const axiosInterceptor = () => {

  const addToken = (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.withCredentials = true;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  };

  axios.interceptors.request.use(
    (config) => {
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
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );
};
