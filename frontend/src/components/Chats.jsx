import { useEffect, useState } from "react";
import { Loader, UserChat } from ".";
import toast from "react-hot-toast";
import { getUserChats } from "../helpers/api-communicators";
const Chats = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    async function getChats() {
      setIsLoading(true);
      try {
        const data = await getUserChats();
        if (data.status === "OK") {
          setChats(data.users);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getChats();
  }, []);
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
