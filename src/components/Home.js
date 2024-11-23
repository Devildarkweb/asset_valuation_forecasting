import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Asset Valuation Forecasting</h1>
        <p>Use NLP to predict asset values efficiently and effectively.</p>
        <div className="links">
          <a href="/data-upload">Data Upload</a>
          <a href="/forecast">Forecast</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
