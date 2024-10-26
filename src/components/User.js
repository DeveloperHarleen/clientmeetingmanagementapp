import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure to install axios: npm install axios

const User = () => {
  const [users, setUsers] = useState([]); // State to store user information

  useEffect(() => {
    // Fetch users from JSON server when component mounts
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data); // Populate users from server
      })
      .catch(error => {
        console.error('There was an error fetching users!', error);
      });
  }, []);

  return (
    <div className="user-credentials">
      <h2>User Credentials</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
