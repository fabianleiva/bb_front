import { axiosPrivate } from "../api/interceptor.http";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshTokenHook";
import { storeBulkBuddies } from "../state/state";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const isAuth = storeBulkBuddies((state) => state.isAuth);
  const currentUserInfo = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${currentUserInfo.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (
          (error.response?.status === 403 && !prevRequest?.sent) ||
          (error.response?.status === 401 && !prevRequest?.sent)
        ) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.response.eject(responseIntercept);
      axiosPrivate.interceptors.response.eject(requestIntercept);
    };
  }, [currentUserInfo, refresh, isAuth]);

  return axiosPrivate;
};

export default useAxiosPrivate;
