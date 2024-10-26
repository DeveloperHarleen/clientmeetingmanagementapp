import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './ResetPassword.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // State for success message

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate sending reset instructions
    if (validateEmail(email)) {
      // Simulate API call to send reset instructions
      setMessage('We have sent instructions to your email to reset your password.'); 
      
      // Clear the email input field after submission
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  // Simple email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="form-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={handleChange} 
            placeholder="Enter your email" 
            required 
          />
        </div>
        <button type="submit" className="reset-button">Reset Password</button>
      </form>
      
      {message && <p className="success-message">{message}</p>}

      {/* Back to Home Button */}
      <Link to="/" className="back-button">Sign Up</Link>
    </div>
  );
};

export default ResetPassword;





