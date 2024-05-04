import { AuthForm } from "../components";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="auth-page">
      <h1 className="text-2xl md:text-3xl text-center text-white font-bold mb-4">
        Log In
      </h1>
      <p className="-mt-6 text-gray-400 text-center  text-[16px]">
        Welcome back! Please enter your account details to log in
      </p>
      <AuthForm isRegister={false} />
      <p className="text-center">
        Don&apos;t have an account??{" "}
        <Link
          to={"/sign-up"}
          className="font-semibold  text-white hover:underline hover:text-sky transition"
        >
          Create One!
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
