import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <Link to="/user-profile" className="profile-button">User Profile</Link>
    </div>
  );
};

export default Dashboard;
