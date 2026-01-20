/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import api from "../configs/api";
import { toast } from "react-hot-toast";

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  user: null,
  setUser: () => {},
  login: async () => {},
  signup: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signup = async ({ name, email, password }) => {
    try {
      const { data } = await api.post("/api/auth/v1/register", {
        name,
        email,
        password,
      });

      if (data.user) {
        setUser(data.user);
        setIsLoggedIn(true);
      }
      toast.success(data.message);
    } catch (error) {
      console.log("sigup error", error);
      toast.error(error.message);
    }
  };

  const login = async ({ email, password }) => {
    try {
      const { data } = await api.post("/api/auth/v1/login", {
        email,
        password,
      });

      if (data.user) {
        setUser(data.user);
        setIsLoggedIn(true);
      }
      toast.success(data.message);
    } catch (error) {
      console.log("login error", error);
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      const { data } = await api.post("/api/auth/v1/logout");
      setUser(null);
      setIsLoggedIn(false);
      toast.success(data.message);
    } catch (error) {
      console.log("logout error", error);
      toast.error(error.message);
    }
  };

  const fetchUser = async () => {
    try {
      const { data } = await api.get("/api/auth/v1/verify");
      if (data.user) {
        setUser(data.user);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log("logout error", error);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchUser();
    })();
  }, []);

  const value = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    signup,
    login,
    logout,
    fetchUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
