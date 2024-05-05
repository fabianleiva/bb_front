import axios from "axios";
import { storeBulkBuddies } from "../state/state";

const useRefreshToken = () => {
  const setIsAuth = storeBulkBuddies((state) => state.setIsAuth);
  const refresh = async () => {
    try {
      const res = await axios.get("/refresh", {
        withCredentials: true,
      });

      console.log(res);
      setIsAuth(true, res.data.token);
      return res.data.token;
    } catch (err) {
      console.log(err);
    }
  };
  return refresh;
};

export default useRefreshToken;
