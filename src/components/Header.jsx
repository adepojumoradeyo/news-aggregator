function Header({ darkMode, setDarkMode }) {
  return (
    <div className="flex items-center justify-between py-10 ">
      <h1 className="flex flex-col font-bold text-3xl">
        Daily News{" "}
        <span className="font-semibold text-xl">All latest stories</span>
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-lg "
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
}

export default Header;
