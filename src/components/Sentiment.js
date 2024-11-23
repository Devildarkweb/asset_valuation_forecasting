import React from 'react';
import './Sentiment.css';

const Sentiment = () => {
  const articles = [
    { title: 'Market Crash Looms', sentiment: 'Negative' },
    { title: 'Tech Stocks on the Rise', sentiment: 'Positive' },
  ];

  return (
    <div className="sentiment-container">
      <h1>News Sentiment Analysis</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <strong>{article.title}</strong> - Sentiment: {article.sentiment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sentiment;
