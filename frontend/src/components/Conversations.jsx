import SendMessage from "./SendMessage";

const Conversations = () => {
  return (
    <div className="flex-1 border-l border-l-pink">
      <div className="bg-[#001131] sticky top-0 left-0 p-4">
        To: <span className="text-white font-semibold">Same Edwards</span>
      </div>
      <div className="overflow-y-auto h-[90%]">
        <div className="h-[3000px]"></div>
        <SendMessage />
      </div>
    </div>
  );
};

export default Conversations;
