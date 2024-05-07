import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getUserChats } from "../helpers/api-communicators";
import { UseAuthContext } from "../context/AuthContext";

const useGetConversations = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chats, setChats] = useState([]);
  const context = UseAuthContext();
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
  }, [context?.user]);
  return { chats, isLoading };
};

export default useGetConversations;
