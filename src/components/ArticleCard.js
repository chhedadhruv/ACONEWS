import React from 'react';
import '../styles/ArticleCard.css';

function highlightText(text, searchTerm) {
  if (!searchTerm.trim()) return text;

  const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <span key={index} className="highlight">
        {part}
      </span>
    ) : (
      part
    )
  );
}

const ArticleCard = ({ title, description, url, imageUrl, searchTerm }) => {
  return (
    <div className="article-card">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h3>{highlightText(title, searchTerm)}</h3>
      <p>{highlightText(description, searchTerm)}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default ArticleCard;
