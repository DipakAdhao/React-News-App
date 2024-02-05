import React from 'react';

const NewsItem = ({ article }) => {
  // Check if the 'article' object exists
  if (!article) {
    return null;
  }

  // Destructure properties from the 'article' object
  const { title, description, url, urlToImage, author } = article;

  // Check if required properties are present
  if (!title || !description || !url) {
    return null; // Skip rendering if any required property is missing
  }

  return (
    <div className="card">
      {urlToImage && (
        <img
          src={urlToImage}
          className="card-img-top"
          alt={title}
          style={{ maxWidth: '100%', height: 'auto' }} // Adjust styles as needed
        />
      )}
      <div className="card-body">
        {author && <p className="card-author">{author}</p>}
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
