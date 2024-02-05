import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import NewsList from '../components/NewsList';
import SearchBar from '../components/SearchBar';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <h1 className="mt-4 mb-4">Search News</h1>
        <SearchBar onSearch={handleSearch} />
        <Link to="/" className="btn btn-primary mb-3">
          Go to Home Page
        </Link>
        <NewsList searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default SearchPage;
