import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, Url }) => (
  <div className="ws__blog-container_article">
    <div className="ws__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="ws__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p> <a href={Url} target="_blank"> Read Full Article </a></p>
    </div>
  </div>
);

export default Article;