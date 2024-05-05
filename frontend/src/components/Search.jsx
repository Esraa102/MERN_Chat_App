import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <form className="flex lg:w-full bg-gray-400/10 gap-3 px-3 py-2 border border-pink rounded-md">
      <input
        type="search"
        name="search"
        id="search"
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
