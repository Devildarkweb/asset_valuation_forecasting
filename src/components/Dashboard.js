import React from 'react';
import './Dashboard.css';

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard-container">
      <h1>User Dashboard</h1>
      <div className="user-info">
        {Object.entries(user).map(([key, value]) => (
          <p key={key}>
            <strong>{key.replace('_', ' ').toUpperCase()}:</strong> {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
