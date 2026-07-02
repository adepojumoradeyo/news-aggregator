function CategoryBar({ category, setCategory }) {
  const categories = [
    "General",
    "Technology",
    "Sports",
    "Business",
    "Entertainment",
    "Health",
    "Science",
  ];

  return (
    <div className="flex overflow-x-auto gap-3 py-4 px-2 whitespace-nowrap scrollbar-hide">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={` rounded-full px-4 py-2 text-sm md:px-5 md:text-base transition ${
            category === item
              ? "bg-slate-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
