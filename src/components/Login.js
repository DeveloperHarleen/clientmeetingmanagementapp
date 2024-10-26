// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To handle login errors
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault(); 

    // Retrieve stored user profiles
    const storedProfiles = JSON.parse(localStorage.getItem('userProfiles')) || [];
    
    // Find user data matching the input username and password
    const userData = storedProfiles.find(profile => 
      profile.username === username && profile.password === password
    );

    if (userData) {
      // Successful login logic
      localStorage.setItem('loggedInUsername', userData.username); // Save username to localStorage
      navigate('/loginpagedashboard'); // Redirect to the dashboard page after successful login
    } else {
      // Handle invalid credentials
      setError('Invalid username or password'); 
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <button type="submit" className="login-button">Login</button>
      </form>

      {/* Back to Home Button */}
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
};

export default Login;
