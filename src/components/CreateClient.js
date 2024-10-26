import React, { useState } from 'react';
import { createClient } from '../services/clientService';

const CreateClient = () => {
  const [clientData, setClientData] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
  });

  const handleChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createClient(clientData);
    alert('Client created successfully!');
    setClientData({ name: '', email: '', address: '', password: '' });
  };

  return (
    <div>
      <h2>Create a Client</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" value={clientData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Enter Email" value={clientData.email} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Enter Address" value={clientData.address} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Enter Password" value={clientData.password} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default CreateClient;
