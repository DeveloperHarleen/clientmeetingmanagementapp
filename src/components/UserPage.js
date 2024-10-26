// src/components/UserProfile.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../actions/userActions'; // Ensure this path is correct

const UserProfile = () => {
  const users = useSelector(state => state.user.users); // Select users from Redux state
  const dispatch = useDispatch();

  const handleUpdate = (id, updatedData) => {
    dispatch(updateUser({ id, ...updatedData })); // Dispatch the updateUser action
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      {users.length === 0 ? (
        <div className="empty-message">
          <p>No user profile found. Please create an account.</p>
        </div>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>
                  <button onClick={() => handleUpdate(user.id, { email: 'newEmail@example.com', address: 'New Address' })}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserProfile;

