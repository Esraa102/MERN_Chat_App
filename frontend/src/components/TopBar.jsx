import Chats from "./Chats";
import { TbLogout2 } from "react-icons/tb";
import { RiMessage3Fill } from "react-icons/ri";
import { IoCloseCircleSharp } from "react-icons/io5";

import Search from "./Search";
import { useState } from "react";
import { UseAuthContext } from "../context/AuthContext";
const TopBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { logOut, isFormLoading } = UseAuthContext();
  return (
    <>
      <div className="px-4 py-3 flex flex-row items-center gap-3 justify-between mb-4 w-full page lg:hidden">
        <Search />
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsVisible((prev) => !prev)}
            className="block w-fit  hover:text-pink transition"
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
      {isVisible && (
        <div className="">
          <h4 className="text-white text-lg font-semibold">Your Chats</h4>
          <Chats />
        </div>
      )}
    </>
  );
};

export default TopBar;
