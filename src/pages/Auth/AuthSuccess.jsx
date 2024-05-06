import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PatnersLogo } from "../../components/PatnersLogo";
import axios from "axios";
import { storeBulkBuddies } from "../../state/state";
import { LinearProgress } from "@mui/material";
export const AuthSuccess = () => {
  // http://localhost:3000/api/v1/auth/google
  const navigate = useNavigate();
  const setUser = storeBulkBuddies((state) => state.setUser);
  const setAlert = storeBulkBuddies((state) => state.setAlert);
  const setIsAuth = storeBulkBuddies((state) => state.setIsAuth);
  const user = storeBulkBuddies((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = async () => {
    try {
      const { data } = await axios.get("auth/success");
      const googleUser = data.data;
      setUser(googleUser);
      setIsAuth(true, googleUser.token);
      setLoading(false);
      setTimeout(() => {
        navigate("/user/profile");
      }, 2000);
    } catch (error) {
      setAlert({
        message: "Error al obtener los datos del usuario",
        type: "error",
      });
      navigate("/auth/login");
    }
  };

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {loading ? (
            <LinearProgress />
          ) : (
            <>Bienvenido {user && `${user?.first_name} ${user?.last_name} `}</>
          )}
        </h2>
        <PatnersLogo />
      </div>
    </div>
  );
};
