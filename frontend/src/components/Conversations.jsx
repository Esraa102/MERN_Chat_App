import { Messages, SendMessage } from ".";
import { TiMessages } from "react-icons/ti";
import { UseAuthContext } from "../context/AuthContext";
import useConversation from "../zustand/useConversations";
import { useEffect, useRef } from "react";

const NoChatSelected = () => {
  const { user } = UseAuthContext();
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-3">
      <p className="text-white capitalize text-lg font-semibold">
        Welcom 👋 {user?.fullName} ❄️
      </p>
      <p className="text-white text-lg font-semibold">
        Select a chat to start messaging
      </p>
      <TiMessages size={70} className="text-white" />
    </div>
  );
};

const Conversations = () => {
  const messagesContainer = useRef();
  const { selectedConversation, setSelectedConversation, messages } =
    useConversation();
  useEffect(() => {
    const scrollToBottom = () => {
      messagesContainer.current?.scrollTo({
        top: messagesContainer.current?.scrollHeight,
        behavior: "smooth",
      });
    };
    scrollToBottom();
  }, [messages]);
  useEffect(() => {
    // to remove selectedConversation previous state
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex-1 flex flex-col chat-container lg:h-full lg:border-l lg:border-l-pink">
      {selectedConversation !== null ? (
        <>
          {/* Header */}
          <div className="bg-[#001131]  sticky top-0 left-0 p-4">
            To:{" "}
            <span className="text-white capitalize font-semibold">
              {selectedConversation.fullName}
            </span>
          </div>
          <div
            ref={messagesContainer}
            className="overflow-y-auto flex-1 lg:h-[78%]"
          >
            <Messages />
          </div>
          <div className="py-4 flex items-center">
            <SendMessage />
          </div>
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
};

export default Conversations;
