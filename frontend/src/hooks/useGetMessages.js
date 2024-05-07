import { useEffect, useState } from "react";
import { getAllMessages } from "../helpers/api-communicators";
import useConversation from "../zustand/useConversations";
import toast from "react-hot-toast";
const useGetMessages = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();
  
  useEffect(() => {
    const getMessages = async () => {
      setIsLoading(true);
      try {
        const data = await getAllMessages(selectedConversation._id);
        if (data.status === "OK") {
          setMessages(data.messages);
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
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation._id, setMessages]);
  return { isLoading, messages };
};

export default useGetMessages;
