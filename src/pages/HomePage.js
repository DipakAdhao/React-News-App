import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import NewsList from '../components/NewsList';

const HomePage = () => {
  return (
    <div className="container mt-4">
      <NavBar currentPage="home" />
      {/* Your existing content */}
      <h1 className="mt-4 mb-4">Top Headlines</h1>
      <NewsList />

      {/* Example usage of Link component */}
      <Link to="/some-other-page">Go to Another Page</Link>
    </div>
  );
};

export default HomePage;
