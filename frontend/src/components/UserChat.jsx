import { NavLink } from "react-router-dom";

const UserChat = () => {
  return (
    <NavLink
      to={"/chat/:id"}
      className={({ isActive }) =>
        `my-2 px-2 py-2 hover:bg-[#001131]/70 transition rounded-md flex gap-2 items-center
        ${isActive && "bg-[#001131]/70"}`
      }
    >
      <img
        src="/assets/bg.png"
        alt="avatar-img"
        className="w-[45px] h-[45px] rounded-full object-cover"
      />
      <span className="text-white font-semibold">Karma Doe</span>
    </NavLink>
  );
};

export default UserChat;
