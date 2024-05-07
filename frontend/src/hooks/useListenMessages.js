import { useEffect } from "react";
import { UseSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversations";

const useListenMessages = () => {
  const { socket } = UseSocketContext();
  const { messages, setMessages } = useConversation();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });
  }, [socket, messages, setMessages]);
  return () => socket?.off("newMessage");
};

export default useListenMessages;
