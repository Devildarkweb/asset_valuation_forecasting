import React from 'react';
import './Forecast.css';

const Forecast = () => {
  const assets = ['GOOG', 'ABL', 'ACR','AES','AEO','DOX','DOV'];

  const handleSelect = (e) => {
    console.log(`Selected asset: ${e.target.value}`);
  };

  return (
    <div className="forecast-container">
      <h1>Asset Selection and Forecast</h1>
      <select onChange={handleSelect} className="asset-dropdown">
        {assets.map((asset, index) => (
          <option key={index} value={asset}>
            {asset}
          </option>
        ))}
      </select>
      <div className="forecast-results">
        <h2>Forecast Results</h2>
        <p>Visualize historical and predicted data here.</p>
      </div>
    </div>
  );
};

export default Forecast;
