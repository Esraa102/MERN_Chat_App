import { useState } from "react";
import { useForm } from "react-hook-form";
// eslint-disable-next-line react/prop-types
const AuthForm = ({ isRegister }) => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {isRegister && (
        <div className="flex items-center gap-4 flex-wrap">
          <div className="field-container flex-1">
            <label htmlFor="fullName" className="label">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Jhon Doe"
              id="fullName"
              className={`form-input ${errors.fullName && "error-input"}`}
              {...register("fullName", {
                required: {
                  value: true,
                  message: "Full Name is Required",
                },
                minLength: {
                  value: 3,
                  message: "Full Name should be at least 3 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Full name can't be more than 30 characters",
                },
              })}
            />
            {errors.fullName && (
              <p className="error">{errors.fullName.message}</p>
            )}
          </div>
          <div className="field-container flex-1">
            <label htmlFor="username" className="label">
              Username
            </label>
            <input
              type="text"
              placeholder="jhon_123"
              id="usernamme"
              className={`form-input ${errors.username && "error-input"}`}
              {...register("username", {
                required: {
                  value: true,
                  message: "Username is Required",
                },
                minLength: {
                  value: 3,
                  message: "Username should be at least 3 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Username can't be more than 30 characters",
                },
              })}
            />
            {errors.username && (
              <p className="error">{errors.username.message}</p>
            )}
          </div>
        </div>
      )}
      <div className="field-container">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="text"
          placeholder="jhon1925.doe@gmail.com"
          id="email"
          className={`form-input ${errors.email && "error-input"}`}
          {...register("email", {
            required: {
              value: true,
              message: "Email is Required",
            },
            pattern: {
              value:
                /^[a-zA-Z0-9_!#$%&*=+/?^{|}~]+([.-]?[a-zA-Z0-9_!#$%&*=+/?^{|}~]+)*@\w+([.-]?\w+)*(\.\w{2,50})+$/,
              message: "Please Provide Valid Email",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div className="field-container">
        <label htmlFor="password" className="label">
          Password
        </label>
        <div className="relative w-full">
          <input
            type={isVisible ? "text" : "password"}
            placeholder="************"
            id="password"
            className={`form-input w-full ${errors.password && "error-input"}`}
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required",
              },
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters",
              },
              maxLength: {
                value: 30,
                message: "Password can't be more than 30 characters",
              },
            })}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2"
            type="button"
            onClick={() => setIsVisible((prev) => !prev)}
          >
            {isVisible ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>
      {isRegister && (
        <div>
          <div className="field-container flex-row flex-wrap gap-4 mt-4">
            <label className="cursor-pointer flex itmes-center gap-1">
              <input
                type="radio"
                value={"Male"}
                className="radio border-gray-300 h-[18px] w-[18px] radio-info"
                {...register("gender", {
                  required: {
                    value: true,
                    message: "Gender Selection is required",
                  },
                })}
              />
              <span className="text-white label-text">Male</span>
            </label>
            <label className="cursor-pointer flex itmes-center gap-1">
              <input
                type="radio"
                value={"Female"}
                className="radio border-gray-300 h-[18px] w-[18px] radio-info"
                {...register("gender")}
              />
              <span className="text-white label-text">Female</span>
            </label>
          </div>
          {errors.gender && (
            <p className="error mt-1">{errors.gender.message}</p>
          )}
        </div>
      )}
      <button className="main-btn" type="submit">
        {isRegister ? "Create Account" : "Sign In"}
      </button>
    </form>
  );
};

export default AuthForm;
