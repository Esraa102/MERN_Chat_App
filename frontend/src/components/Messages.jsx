import { Loader, Message } from ".";
import useGetMessages from "../hooks/useGetMessages";
import useListenMessages from "../hooks/useListenMessages";

const Messages = () => {
  const { isLoading, messages } = useGetMessages();
  useListenMessages();
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
