import NewsCard from "./NewsCard";

function NewsList({ articles, index, totalResults, readingList, toggleReadingList }) {
  return (
    <>
    <div className="flex justify-between items-center py-5 text-sm sm:text-xl">
      <p>showing <strong>{articles.length}</strong> of <strong>{totalResults}</strong> results</p>       <p>Readinglist ({readingList.length})</p>
    </div>
    <div className="flex flex-col  md:grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {articles.map((article) => (
        <NewsCard key={article.url || index} article={article} readingList={readingList} toggleReadingList={toggleReadingList} />
      ))}
    </div>
      </>
  );
}

export default NewsList;
