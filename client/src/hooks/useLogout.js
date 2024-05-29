import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useState } from "react";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);

    try {
      const res = await axios.post("api/auth/logout");
      if (res.error) {
        throw new Error(res.error);
      }

      localStorage.removeItem("authuser");
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
