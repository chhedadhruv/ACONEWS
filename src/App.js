import React, { useEffect, useState } from 'react';
import ArticleCard from './components/ArticleCard';
import './styles/App.css';
import './styles/ArticleCard.css';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const apiKey = process.env.REACT_APP_GNEWS_API_KEY;
        const url = searchTerm
          ? `https://gnews.io/api/v4/search?q=${encodeURIComponent(searchTerm)}&lang=en&max=10&page=${page}&apikey=${apiKey}`
          : `https://gnews.io/api/v4/top-headlines?category=${query}&lang=en&country=us&max=10&page=${page}&apikey=${apiKey}`;
        const response = await axios.get(url);
        setArticles(response.data.articles);
      } catch (error) {
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [page, query, searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    setSearchTerm(e.target.search.value);
  };

  const handleCategoryChange = (e) => {
    setPage(1);
    setQuery(e.target.value);
  };

  return (
    <div>
      <header>
        <h1>ACONEWS</h1>
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            name="search"
            placeholder="Search news..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <div className="category-selector">
          <label htmlFor="category">Select Category:</label>
          <select id="category" value={query} onChange={handleCategoryChange} className="category-dropdown">
            <option value="general">General</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </div>
      </header>

      <div className="container">
        {loading ? <div className="loading">Loading...</div> : null}
        {error ? <div className="error">{error}</div> : null}
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
              url={article.url}
              imageUrl={article.image}
              searchTerm={searchTerm}
            />
          ))
        ) : (
          !loading && <p>No articles found.</p>
        )}
      </div>
      <div className="pagination">
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
