const BASE_URL = "https://newsapi.org/v2";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export async function getTopHeadlines(category = "general", page = 1) {
  const res = await fetch(
    `${BASE_URL}/top-headlines?country=us&category=${category}&page=${page}&pageSize=12&apiKey=${API_KEY}`,
  );

  if (!res.ok) throw new Error("failed");

  const data = await res.json();

  return data;
}

export async function searchNews(query, page = 1) {
  const res = await fetch(
    `${BASE_URL}/everything?q=${encodeURIComponent(query)}&page=${page}&pageSize=12&sortBy=publishedAt&apiKey=${API_KEY}`,
  );

  if (!res.ok) {
    throw new Error("Failed to search news.");
  }

  return await res.json();
}
