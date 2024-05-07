import { Loader, UserChat } from ".";
import useGetConversations from "../hooks/useGetConversations";

const Chats = () => {
  const { isLoading, chats } = useGetConversations();
  return (
    <div className=" py-2 flex flex-col gap-3 h-full w-full">
      {isLoading && <Loader miniLoader={true} />}
      {!isLoading &&
        chats.length > 0 &&
        chats.map((chat, index) => (
          <UserChat
            key={chat._id}
            chat={chat}
            index={index === chats.length - 1}
          />
        ))}
    </div>
  );
};

export default Chats;
