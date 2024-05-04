// eslint-disable-next-line react/prop-types
const AuthForm = ({ isRegister }) => {
  return (
    <form className="form">
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
              name="fullName"
              className="form-input"
            />
          </div>
          <div className="field-container flex-1">
            <label htmlFor="username" className="label">
              Username
            </label>
            <input
              type="text"
              placeholder="jhon_123"
              id="usernamme"
              name="usernamme"
              className="form-input"
            />
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
          name="email"
          className="form-input"
        />
      </div>
      <div className="field-container">
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          placeholder="************"
          id="password"
          name="password"
          className="form-input"
        />
      </div>
      {isRegister && (
        <div className="field-container flex-row flex-wrap gap-4 mt-4">
          <label className="cursor-pointer flex itmes-center gap-1">
            <input
              type="radio"
              name="radio-10"
              className="radio border-gray-300 h-[18px] w-[18px] radio-info"
              checked
            />
            <span className="text-white label-text">Male</span>
          </label>
          <label className="cursor-pointer flex itmes-center gap-1">
            <input
              type="radio"
              name="radio-10"
              className="radio border-gray-300 h-[18px] w-[18px] radio-info"
              checked
            />
            <span className="text-white label-text">Female</span>
          </label>
        </div>
      )}
      <button
        className="btn block mt-6 bg-bright-brown hover:bg-bright-brown/60  text-lg text-black"
        type="submit"
      >
        {isRegister ? "Create Account" : "Sign In"}
      </button>
    </form>
  );
};

export default AuthForm;
