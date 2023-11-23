// NewsApp.js
import React, { useState, useEffect } from 'react';
import './NewsApp.css';

const NewsApp = () => {
  const API_KEY = "34928109be014ea3846e107435ba5d19"; //newsapi.org
  const url = "https://newsapi.org/v2/everything?q=";

  const [articles, setArticles] = useState([]);
  const [curSelectedNav, setCurSelectedNav] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchNews("India");
  }, []);

  const reload = () => {
    window.location.reload();
  };

  const fetchNews = async (query) => {
    try {
      const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setArticles(data.articles || []); // Ensure articles is an array
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const onNavItemClick = (id) => {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    setCurSelectedNav(navItem);
    curSelectedNav?.classList.add("active");
  };

  const onSearchButtonClick = () => {
    if (!searchText) return;
    fetchNews(searchText);
    curSelectedNav?.classList.remove("active");
    setCurSelectedNav(null);
  };

  return (
    <div className="main-container">
        <div  className="search-results">
      <div className="search-bar flex">
        <input
          id="search-text"
          type="text"
          className="news-input"
          placeholder="e.g. Science"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          id="search-button"
          className="search-button"
          onClick={onSearchButtonClick}
        >
          Search
        </button>
      </div>
    </div>
      <main className= "edit">
        <div className="cards-container container flex" id="cards-container">
          {articles.map((article, index) => (
            <div key={index} className="card">
              <div className="card-header">
                <img
                  src={article.urlToImage || "https://via.placeholder.com/400x200"}
                  alt="news-image"
                  id="news-img"
                />
              </div>
              <div className="card-content">
                <h3 id="news-title">{article.title}</h3>
                <h6 className="news-source" id="news-source">
                  {article.source.name} ·{" "}
                  {new Date(article.publishedAt).toLocaleString("en-US", {
                    timeZone: "Asia/Jakarta",
                  })}
                </h6>
                <p className="news-desc" id="news-desc">
                  {article.description}
                </p>
                <button onClick={() => window.open(article.url, "_blank")}>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NewsApp;
