import { useEffect } from "react";
import { UseSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversations";
import notificationSound from "../../public/assets/sounds/notification.mp3";
const useListenMessages = () => {
  const { socket } = UseSocketContext();
  const { messages, setMessages } = useConversation();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(notificationSound);
      sound.play();
      newMessage.shouldShake = true;
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [messages, setMessages, socket]);
};

export default useListenMessages;
