import { Messages, SendMessage } from ".";
import { TiMessages } from "react-icons/ti";

const NoChatSelected = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-3">
      <p className="text-white text-lg font-semibold">Welcom 👋 Karma Doe ❄️</p>
      <p className="text-white text-lg font-semibold">
        Select a chat to start messaging
      </p>
      <TiMessages size={70} className="text-white" />
    </div>
  );
};

const Conversations = () => {
  const noChatsSelected = false;
  return (
    <div className="flex-1 h-[70vh] lg:h-full lg:border-l lg:border-l-pink">
      {!noChatsSelected ? (
        <>
          {/* Header */}
          <div className="bg-[#001131]  sticky top-0 left-0 p-4">
            To: <span className="text-white font-semibold">Same Edwards</span>
          </div>
          <div className="overflow-y-auto h-[75%] lg:h-[78%]">
            <Messages />
          </div>
          <div className="h-[12%] flex items-center">
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
