import React, { useState, useEffect } from 'react';
import { getClientById } from '../services/clientService';
import CreateMeeting from './CreateMeeting';

function ClientDetail({ clientId }) {
  const [client, setClient] = useState(null);

  useEffect(() => {
    getClientById(clientId).then((response) => {
      setClient(response.data);
    });
  }, [clientId]);

  if (!client) return <div>Loading...</div>;

  return (
    <div>
      <h3>Client Detail</h3>
      <p>Name: {client.name}</p>
      <p>Email: {client.email}</p>
      <p>Phone: {client.phone}</p>
      <p>Company: {client.company}</p>
      <MeetingScheduler clientId={clientId} />
    </div>
  );
}

export default ClientDetail;
