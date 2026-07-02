import noImage from "/src/assets/no-image.jpg";

function NewsCard({ article }) {
  const { title, description, urlToImage, source, publishedAt, url } = article;
  return (
    <>
      <div className="bg-slate- rounded-xl shadow-md  flex flex-col h-full gap-2 p-4">
        <div>
          <img src={urlToImage || noImage} alt={title} />
        </div>
        <div className="flex flex-col gap-2">
          <h2>{title}</h2>
          {description || "no description available"}
          <span>{source?.name || "unknown source"}</span>
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>
        <a
          href={url}
          className="text-sm p-2 self-start bg-red-500 rounded-full"
        >
          read move →
        </a>
      </div>
    </>
  );
}

export default NewsCard;
