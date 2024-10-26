import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(''); // New state for subject
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if any field is empty
    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields marked with an asterisk.");
      return;
    }

    // Handle form submission logic here
    console.log("Form Submitted", { name, email, subject, message });
  };

  return (
    <Container className="contact-container">
      <h1>Contact Us</h1>
      <Row className="justify-content-center mb-4">
        {/* Navigation Links in a Row */}
        <Col className="text-center">
          <div className="d-flex justify-content-center">
            <Link to="/login" className="nav-link mx-2">Login</Link>
            <Link to="/reset-password" className="nav-link mx-2">Reset Password</Link>
           
          </div>
        </Col>
      </Row>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:<span className="text-danger">*</span></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:<span className="text-danger">*</span></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:<span className="text-danger">*</span></label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter your subject"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:<span className="text-danger">*</span></label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      
      {/* Back to Home Button */}
      <div className="button-container">
        <Link to="/" className="back-button">Back to Home</Link>
      </div>
    </Container>
  );
};

export default Contact;
