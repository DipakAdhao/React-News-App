// CategoryPage.js
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NewsList from '../components/NewsList';
import CategoryFilter from '../components/CategoryFilter';

const CategoryPage = () => {
  const { category } = useParams();
  const [currentCategory, setCurrentCategory] = useState(category);

  const categories = [
    'general',
    'business',
    'technology',
    'science',
    'health',
    'entertainment',
    'sports',
  ];

  const handleCategoryClick = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  return (
    <div className="container mt-4">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          News App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Category Buttons */}
      <div className="btn-group mt-3" role="group">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`btn btn-outline-primary ${currentCategory === cat ? 'active' : ''}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <h1 className="mt-4">{`${currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)} News`}</h1>
      <CategoryFilter />
      <NewsList />
    </div>
  );
};

export default CategoryPage;
