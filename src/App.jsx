import { useEffect, useState } from "react";
import Header from "./components/Header";
import { getTopHeadlines, searchNews } from "./services/newsApi";
import Spinner from "./components/Spinner";
import NewsList from "./components/NewsList";
import CategoryBar from "./components/CategoryBar";
import SearchBar from "./components/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn";
import Error from "./components/Error";

function App() {
  const [articles, setArticles] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    async function loadNews() {
      try {
        setIsloading(true);

        let data;

        if (searchTerm.trim()) {
          data = await searchNews(searchTerm, page);
        } else {
          data = await getTopHeadlines(category, page);
        }

        setTotalResults(data.totalResults);
        if (page === 1) {
          setArticles(data.articles);
        } else {
          setArticles((prevArticles) => [...prevArticles, ...data.articles]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsloading(false);
      }
    }

    loadNews();
  }, [category, searchTerm, page]);

  function handleSearch() {
    setPage(1);
    setSearchTerm(searchQuery);
  }

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
    setPage(1);
    setSearchQuery("");
    setSearchTerm("");
  }

  function handleLoadMore() {
    setPage((prevPage) => {
      prevPage + 1;
      return prevPage + 1;
    });
  }

  return (
    <>
      <div
        className={` ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="p-5 ">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
          />
          <CategoryBar category={category} setCategory={handleCategoryChange} />

          <div>
            {isloading && <Spinner />}
            {error && <Error />}
            {!isloading && !error && <NewsList articles={articles} />}
            {!error && articles.length < totalResults && (
              <LoadMoreBtn
                handleLoadMore={handleLoadMore}
                isLoading={isloading}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
