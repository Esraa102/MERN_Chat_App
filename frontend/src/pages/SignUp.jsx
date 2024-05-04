import { AuthForm } from "../components";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="page">
      <h1 className="text-2xl md:text-3xl text-center text-pink font-bold mb-4">
        Sign Up
      </h1>
      <p className="-mt-6 text-gray-200 text-center  text-[16px]">
        Welcome! Please enter your details to create a new account :)
      </p>
      <AuthForm isRegister />
      <p className="text-center text-gray-200">
        Already have an account??{" "}
        <Link
          to={"/sign-in"}
          className="font-semibold  text-white hover:underline hover:text-pink transition"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
