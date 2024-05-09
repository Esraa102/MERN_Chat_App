/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  checkAuthStatus,
  logInUser,
  logOutUser,
  registerUser,
} from "../helpers/api-communicators";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components";

const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    async function checkAuth() {
      setIsLoading(true);
      try {
        const data = await checkAuthStatus();
        if (data.status === "OK") {
          setUser(data.userData);
          setIsAuthorized(true);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    checkAuth();
  }, []);
  const signUp = async (username, fullName, email, password, gender) => {
    setIsFormLoading(true);
    try {
      const data = await registerUser(
        username,
        fullName,
        email,
        password,
        gender
      );
      if (data.status === "OK") {
        setUser(data.userData);
        setIsAuthorized(true);
        toast.success("Welcome to our website🤟😁");
        navigate("/");
      } else {
        setUser(null);
        setIsAuthorized(false);
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsFormLoading(false);
    }
  };
  const logIn = async (email, password) => {
    setIsFormLoading(true);
    try {
      const data = await logInUser(email, password);
      if (data.status === "OK") {
        setUser(data.userData);
        setIsAuthorized(true);
        toast.success("Hi Welcome Back👋!");
        navigate("/");
      } else {
        setUser(null);
        setIsAuthorized(false);
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    } finally {
      setIsFormLoading(false);
    }
  };

  const logOut = async () => {
    setIsFormLoading(true);
    try {
      const data = await logOutUser();
      if (data.status === "OK") {
        setUser(null);
        setIsAuthorized(false);
        toast.success("Sad to see you leave🥺💔");
        navigate("/sign-in");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsFormLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthorized,
        isLoading,
        signUp,
        logIn,
        logOut,
        isFormLoading,
      }}
    >
      {isLoading ? <Loader miniLoader={false} /> : children}
    </AuthContext.Provider>
  );
};

export const UseAuthContext = () => useContext(AuthContext);
