import { NavLink } from "react-router-dom";

const UserChat = () => {
  return (
    <NavLink
      to={"/chat/:id"}
      className={({ isActive }) =>
        `px-2 py-2  hover:bg-[#001131]/70 transition rounded-md flex gap-2 items-center
        ${isActive && "bg-[#001131]/70"}`
      }
    >
      <div className="avatar online">
        <div className="w-12 h-12 rounded-full ">
          <img
            src="/assets/bg.png"
            alt="avatar-img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <span className="text-white font-semibold">Karma Doe</span>
    </NavLink>
  );
};

export default UserChat;
