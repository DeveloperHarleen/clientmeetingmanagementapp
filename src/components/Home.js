import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  // State for client form inputs
  const [clientData, setClientData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    password: '',
    repeatPassword: '',
  });

  // State for error messages
  const [errorMessages, setErrorMessages] = useState([]);
  // State for success message
  const [successMessage, setSuccessMessage] = useState('');
  useEffect(() => {
    // Fetch clients from local storage on component mount
    const storedClients = JSON.parse(localStorage.getItem("clients")) || [];
    setClientList(storedClients);
  }, []);

  // State for client list
  const [clientList, setClientList] = useState(JSON.parse(localStorage.getItem("clients")) || []);


  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateAddress = (address) => {
    const addressRegex = /^\d+\s[A-Za-z]+\s[A-Za-z]+/; // Example: "123 Main St"
    return addressRegex.test(address);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const isUniqueUser = (username, email) => {
    const userProfiles = JSON.parse(localStorage.getItem('userProfiles')) || [];
    return !userProfiles.some(
      (user) => user.username === username || user.email === email
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = [];

    // Validation checks
    if (!clientData.firstName) {
      errors.push("First Name is required.");
    }
    if (!clientData.lastName) {
      errors.push("Last Name is required.");
    }
    if (!clientData.username) {
      errors.push("Username is required.");
    }
    if (!validateEmail(clientData.email)) {
      errors.push("Please enter a valid email address.");
    }
    if (!validatePhone(clientData.phone)) {
      errors.push("Please enter a valid phone number (XXX-XXX-XXXX).");
    }
    if (!validateAddress(clientData.address)) {
      errors.push("Please enter a valid US address.");
    }
    if (!validatePassword(clientData.password)) {
      errors.push("Password must be at least 8 characters long, have at least one uppercase letter, one number, and one special character.");
    }
    if (clientData.password !== clientData.repeatPassword) {
      errors.push("Passwords do not match.");
    }
    if (!isUniqueUser(clientData.username, clientData.email)) {
      errors.push("Username or Email already exists.");
    }

    setErrorMessages(errors);

    if (errors.length === 0) {
      // Save client data to localStorage
      let userProfiles = JSON.parse(localStorage.getItem('userProfiles')) || [];
      userProfiles.push(clientData); // Add new user data
      localStorage.setItem('userProfiles', JSON.stringify(userProfiles));

      // Update client list in localStorage
      let updatedClients = [...clientList, clientData];
      localStorage.setItem("clients", JSON.stringify(updatedClients));
      setClientList(updatedClients);

      // Set the success message
      setSuccessMessage('Account created successfully!');

      // Reset the form fields after successful submission
      setClientData({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phone: '',
        company: '',
        address: '',
        password: '',
        repeatPassword: '',
      });
    }
  };

  return (
    <div className="home-container">
      <div className="nav-container">
        <a href="/login" className="nav-item">Login</a>
      </div>
      <form className="client-form" onSubmit={handleSubmit}>
        <h2>Create Client Account</h2>
        {errorMessages.length > 0 && (
          <div className="error-messages">
            {errorMessages.map((error, index) => (
              <p key={index} className="error">{error}</p>
            ))}
          </div>
        )}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={clientData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={clientData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={clientData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={clientData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone (XXX-XXX-XXXX)"
          value={clientData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={clientData.company}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={clientData.address}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={clientData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="repeatPassword"
          placeholder="Repeat Password"
          value={clientData.repeatPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Account</button>
      </form>

      <h2>Client List</h2>
      <ul>
        {clientList.map((client, index) => (
          <li key={index}>{client.firstName} {client.lastName} - {client.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
