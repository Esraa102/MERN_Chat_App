/* eslint-disable react-hooks/exhaustive-deps */
import { AuthForm } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { UseAuthContext } from "../context/AuthContext";
import { useEffect } from "react";
const SignIn = () => {
  const context = UseAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (context?.isAuthorized) {
      navigate("/");
    }
  }, [context?.isAuthorized]);
  return (
    <div className="page">
      <h1 className="text-2xl text-pink md:text-3xl text-center  font-bold mb-4">
        Log In
      </h1>
      <p className="-mt-6 text-gray-200 text-center  text-[16px]">
        Welcome back! Please enter your account details to log in
      </p>
      <AuthForm isRegister={false} />
      <p className="text-center text-gray-200">
        Don&apos;t have an account??{" "}
        <Link
          to={"/sign-up"}
          className="font-semibold  text-white hover:underline hover:text-pink transition"
        >
          Create One!
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
