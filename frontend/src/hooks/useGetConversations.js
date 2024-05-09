import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getUserChats } from "../helpers/api-communicators";

const useGetConversations = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const getConversations = async () => {
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
    };
    getConversations();
  }, []);
  return { chats, isLoading };
};

export default useGetConversations;
