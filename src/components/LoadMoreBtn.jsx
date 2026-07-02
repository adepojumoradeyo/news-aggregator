function LoadMoreBtn({ handleLoadMore, isloading }) {
  return (
    <div>
      <button
        onClick={handleLoadMore}
        disabled={isloading}
        className="bg-gray-300 text-white px-6 py-3 rounded-lg hover:bg-gray-500 mt-5"
      >
        {isloading ? "loading" : "load more"}
      </button>
    </div>
  );
}

export default LoadMoreBtn;
