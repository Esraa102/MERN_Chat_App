import { Chats, Search } from ".";
import { TbLogout2 } from "react-icons/tb";
const Sidebar = () => {
  return (
    <div className="w-[28%] hidden  lg:flex px-4 py-5 flex-col gap-4 justify-between">
      <div className="h-[90%]">
        <Search />
        <div className="h-[90%] w-full mt-4 overflow-y-auto">
          <Chats />
        </div>
      </div>
      <button type="button" className="block w-fit  hover:text-pink transition">
        <TbLogout2 size={30} />
      </button>
    </div>
  );
};

export default Sidebar;