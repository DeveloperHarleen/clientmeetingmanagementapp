// src/components/ClientList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ClientList.css'; // Assuming you have CSS for styling

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Fetch clients from the JSON server
    axios.get('http://localhost:5000/clients')
      .then(response => {
        setClients(response.data); // Store the fetched clients
      })
      .catch(error => {
        console.error('Error fetching clients:', error);
      });
  }, []);


  const [clientList, setClientList] = useState(JSON.parse(localStorage.getItem("clients")) || []);
  
  return (

    
    <div className="client-list-container">
      <h2>Client List</h2>
      <ul>
        {clientList.map(client => (
          <li key={client.id}>
            {client.name} - {client.company} ({client.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;

