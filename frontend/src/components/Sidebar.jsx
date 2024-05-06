import { Chats, Search } from ".";
import { TbLogout2 } from "react-icons/tb";
import { UseAuthContext } from "../context/AuthContext";
const Sidebar = () => {
  const { logOut, isFormLoading } = UseAuthContext();
  return (
    <div className="w-[28%] hidden  lg:flex px-4 py-5 flex-col gap-4 justify-between">
      <div className="h-[90%]">
        <Search />
        <div className="h-[90%] w-full mt-4 overflow-y-auto">
          <Chats />
        </div>
      </div>
      <button
        disabled={isFormLoading}
        onClick={() => logOut()}
        type="button"
        className={`block w-fit  hover:text-pink transition ${
          isFormLoading && "opacity-50 cursor-not-allowed"
        }`}
      >
        <TbLogout2 size={30} />
      </button>
    </div>
  );
};

export default Sidebar;
