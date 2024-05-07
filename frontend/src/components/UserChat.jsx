/* eslint-disable react/prop-types */

import { UseSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversations";

const UserChat = ({ chat, index }) => {
  const { onlineUsers } = UseSocketContext();
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = chat._id === selectedConversation?._id;
  const isOnline = onlineUsers.includes(chat._id);
  return (
    <div
      onClick={() => setSelectedConversation(chat)}
      className={`px-2 py-2 cursor-pointer  hover:bg-[#001131]/70 transition rounded-md flex gap-2 items-center
       ${!index && "border-b border-b-pink/40"} ${
        isSelected && "bg-[#001131]/70"
      }`}
    >
      <div className={`avatar ${isOnline && "online"}`}>
        <div className="w-12 h-12 rounded-full ">
          <img
            src={chat.profileImg}
            alt="avatar-img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <span className="text-white capitalize font-semibold">
        {chat.fullName}
      </span>
    </div>
  );
};

export default UserChat;
