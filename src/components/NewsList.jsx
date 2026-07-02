import NewsCard from "./NewsCard";

function NewsList({ articles, index }) {
  return (
    <div className="flex flex-col  md:grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {articles.map((article) => (
        <NewsCard key={article.url || index} article={article} />
      ))}
    </div>
  );
}

export default NewsList;
