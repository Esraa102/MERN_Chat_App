import { useEffect, useState } from "react";
import { Loader, Message } from ".";
import useConversation from "../zustand/useConversations";
import toast from "react-hot-toast";
import { getAllMessages } from "../helpers/api-communicators";

const Messages = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    async function getMessages() {
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
    }
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);
  return (
    <div className="h-full p-4">
      {isLoading && <Loader miniLoader={true} />}
      {!isLoading && messages.length === 0 && (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-white font-semibold text-lg">
            Say Hello 👋 to start the conversation
          </p>
        </div>
      )}
      {!isLoading &&
        messages.length > 0 &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
    </div>
  );
};

export default Messages;
