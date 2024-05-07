/* eslint-disable react/prop-types */
import { UseAuthContext } from "../context/AuthContext";
import { formateTime } from "../utils/formateTime";
import useConversation from "../zustand/useConversations";
const Message = ({ message }) => {
  const { selectedConversation } = useConversation();
  const { user } = UseAuthContext();
  console.log(user, message);
  const amISender = message.senderId === user?._id;
  console.log(amISender);
  return (
    <>
      <div className={`chat ${amISender ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="user-profile"
              src={
                amISender ? user?.profileImg : selectedConversation?.profileImg
              }
            />
          </div>
        </div>
        <div className={`chat-bubble ${amISender && "bg-pink text-white"}`}>
          {message.message}
        </div>
        <time className="text-xs opacity-50">
          {formateTime(message.createdAt)}
        </time>
      </div>
    </>
  );
};

export default Message;
