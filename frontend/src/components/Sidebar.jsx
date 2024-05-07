/* eslint-disable react/prop-types */
import { Chats, Search } from ".";
import { TbLogout2 } from "react-icons/tb";
import { UseAuthContext } from "../context/AuthContext";
import { RiMessage3Fill } from "react-icons/ri";
import { IoCloseCircleSharp } from "react-icons/io5";

const Sidebar = ({ isVisible, setIsVisible }) => {
  const { logOut, isFormLoading } = UseAuthContext();
  return (
    <>
      <div className="navbar">
        <div className="h-[90%] lg:w-full lg:flex lg:flex-col gap-4">
          <Search />
          <div className="chats-container">
            <Chats />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsVisible((prev) => !prev)}
            className="block lg:hidden w-fit  hover:text-pink transition"
          >
            {isVisible ? (
              <IoCloseCircleSharp size={30} />
            ) : (
              <RiMessage3Fill size={30} />
            )}
          </button>
          <button
            disabled={isFormLoading}
            type="button"
            onClick={() => logOut()}
            className={`block w-fit  hover:text-pink transition ${
              isFormLoading && "opacity-50 cursor-not-allowed"
            }`}
          >
            <TbLogout2 size={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
