function LoadMoreBtn({ handleLoadMore, isloading }) {
  return (
    <div>
      <button
        onClick={handleLoadMore}
        disabled={isloading}
        className="bg-orange-700 text-white px-6 py-3 rounded-lg hover:bg-orange-800 mt-5"
      >
        {isloading ? "loading" : "load more"}
      </button>
    </div>
  );
}

export default LoadMoreBtn;
