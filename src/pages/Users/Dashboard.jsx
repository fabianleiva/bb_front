import { useEffect } from "react";
import axios from "axios";

export const Dashboard = () => {
  useEffect(() => {
    getDataGoogle();
  }, []);

  const getDataGoogle = async () => {
    try {
      const response = await axios.get("http://localhost:3000/login/success", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return <div className="mt-20">Dashboard</div>;
};
