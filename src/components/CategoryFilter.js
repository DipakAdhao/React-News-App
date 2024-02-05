// CategoryFilter.js
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryFilter = () => {
  return (
    <div className="d-flex justify-content-around mt-3">
      <Link to="/category/business" className="btn btn-primary">
        Business
      </Link>
      <Link to="/category/entertainment" className="btn btn-primary">
        Entertainment
      </Link>
      {/* Add more category links as needed */}
    </div>
  );
};

export default CategoryFilter;
