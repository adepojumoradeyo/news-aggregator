import search from "/src/assets/search-line.svg";

function SearchBar({ searchQuery, setSearchQuery, handleSearch }) {
  return (
    <div className="px-5 py-4 flex gap-5 rounded-full bg-white  text-black ">
      <button onClick={handleSearch}>
        <img src={search} alt="" className="w-5" />
      </button>
      <input
        type="text"
        placeholder="search for news"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border-none outline-none bg-transparent focus:outline-none focus:ring-0"
      />
    </div>
  );
}

export default SearchBar;
