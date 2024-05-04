import { IoSend } from "react-icons/io5";

const SendMessage = () => {
  return (
    <form
      className="border z-10 border-pink py-2 px-3 flex gap-2 fixed 
    bottom-4 w-[90%] bg-gray-400/20 md:w-[60%] left-1/2 -translate-x-[28%] rounded-md backdrop-blur-md"
    >
      <input
        type="text"
        name="mess"
        id="mess"
        required
        placeholder="say hello..."
        className="flex-1 text-lg text-white bg-transparent border-none focus:outline-none"
      />
      <button type="submit" className="text-white hover:text-pink transition">
        <IoSend size={22} />
      </button>
    </form>
  );
};

export default SendMessage;
