import { useState } from "react";
import toast from "react-hot-toast";
import { IoSend } from "react-icons/io5";
import { sendMessage } from "../helpers/api-communicators";
import useConversation from "../zustand/useConversations";
const SendMessage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");
  const { selectedConversation, setMessages, messages } = useConversation();

  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    if (!content.trim()) {
      toast.error("Message can't be empty");
      return;
    }
    setIsLoading(true);
    try {
      const data = await sendMessage(selectedConversation._id, content);
      if (data.status === "OK") {
        setMessages([...messages, data.messageData]);
        setContent("");
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
  return (
    <form
      onSubmit={handleSubmitMessage}
      className="border-pink border-2 py-2 px-3 flex gap-2 w-[90%] mx-auto rounded-md backdrop-blur-md"
    >
      <input
        type="text"
        name="mess"
        id="mess"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        minLength={1}
        maxLength={1000}
        placeholder="say hello..."
        className="flex-1 text-lg text-white bg-transparent border-none focus:outline-none"
      />
      <button
        disabled={isLoading}
        type="submit"
        className={`text-white hover:text-pink transition ${
          isLoading && "opacity-50 cursor-not-allowed"
        }`}
      >
        {isLoading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          <IoSend size={22} />
        )}
      </button>
    </form>
  );
};

export default SendMessage;
