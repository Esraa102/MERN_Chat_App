import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import toast from "react-hot-toast";
import useConversations from "../zustand/useConversations";
import useGetConversations from "../hooks/useGetConversations";

const Search = () => {
  const { setSelectedConversation } = useConversations();
  const [searchTerm, setSearchTerm] = useState();
  const { chats } = useGetConversations();
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim() || searchTerm.trim().length < 3) {
      toast.error("you should enter at least 3 characters");
      return;
    }
    const filteredConversation = chats.find((e) =>
      e.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredConversation) {
      setSelectedConversation(filteredConversation);
      setSearchTerm("");
    } else {
      toast.error("No such user found!🙃");
    }
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex lg:w-full bg-gray-400/10 gap-3 px-3 py-2 border border-pink rounded-md"
    >
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
        placeholder="search here..."
        className="bg-transparent flex-1 text-white border-none focus:outline-none"
      />
      <button type="submit" className="text-white hover:text-pink transition">
        <IoSearch size={24} />
      </button>
    </form>
  );
};

export default Search;
