import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import Forecast from './components/Forecast';
import Sentiment from './components/Sentiment';
import Dashboard from './components/Dashboard';
import './styles/App.css';


const App = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone_number: '123-456-7890',
    company_name: 'Tech Corp',
    stock_quantity: '50',
    purchase_date: '2023-01-15',
    purchase_price: '5000',
    updated_at: '2024-11-20',
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <h1 className="brand">Asset Forecasting</h1>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/registration">Register</Link>
            </li>
            <li>
              <Link to="/forecast">Forecast</Link>
            </li>
            <li>
              <Link to="/sentiment">Sentiment</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/sentiment" element={<Sentiment />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
