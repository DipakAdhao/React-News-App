import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import { getTopHeadlines } from '../services/api';

const NewsList = ({ searchTerm }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const articles = await getTopHeadlines();
        setNews(articles || []); // Ensure articles is not undefined
      } catch (error) {
        console.error('Error fetching news:', error);
        setNews([]); // Set news to an empty array in case of an error
      }
    };

    fetchNews();
  }, []);

  // Ensure news is not undefined and handle loading state
  if (!news) {
    return <div>Loading...</div>;
  }

  // Filter out articles with the title '[Removed]' and those without a title
  const filteredNews = searchTerm
    ? news.filter(
        (article) =>
          article.title &&
          article.title.trim().toLowerCase() !== '[removed]' &&
          article.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : news;

  // Ensure filteredNews is not undefined before mapping
  if (!filteredNews.length) {
    return <div>No news available.</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {filteredNews.map((article) => (
          <div key={article.url} className="col-md-4 mb-4">
            <NewsItem article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
