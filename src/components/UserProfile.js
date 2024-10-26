import React, { useState, useEffect } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    address: '',
    phone: '', // New field for phone
    company: '', // New field for company name
    photo: null,
  });

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem('userProfiles')) || [];
    if (storedProfiles.length > 0) {
      const lastProfile = storedProfiles[storedProfiles.length - 1]; // Fetch the last created profile
      setProfileData(lastProfile);
    }

    const savedImage = localStorage.getItem('userProfileImage');
    if (savedImage) {
      setProfileData((prevData) => ({ ...prevData, photo: savedImage }));
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 2000000) { // Example limit: 2MB
        alert('File size exceeds 2MB. Please upload a smaller image.');
        return;
      }
      const imageUrl = URL.createObjectURL(file); // Preview the uploaded photo
      setProfileData((prevData) => ({
        ...prevData,
        photo: imageUrl, // Set the preview URL
      }));

      localStorage.setItem('userProfileImage', imageUrl);
      e.target.value = ''; 
    }
  };

  const handleDeletePhoto = () => {
    setProfileData((prevData) => ({
      ...prevData,
      photo: null,
    }));
    localStorage.removeItem('userProfileImage');
  };

  const handleSave = () => {
    localStorage.setItem('userProfiles', JSON.stringify([...JSON.parse(localStorage.getItem('userProfiles') || '[]'), profileData]));
    setIsEditing(false);
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>

      <div className="navigation-links">
        <a href="/loginpagedashboard" className="nav-item">Dashboard</a>
      </div>

      <div className="profile-photo">
        {profileData.photo ? (
          <div className="photo-container">
            <img src={profileData.photo} alt="Profile" className="profile-image" />
            <button className="delete-photo-button" onClick={handleDeletePhoto}>Delete Photo</button>
          </div>
        ) : (
          <p></p>
        )}
        <input type="file" accept="image/*" onChange={handlePhotoChange} />
      </div>

      <div className="profile-info">
        <div className="profile-section">
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={profileData.username}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={profileData.address}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Company:</label>
            <input
              type="text"
              name="company"
              value={profileData.company}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
        </div>
      </div>

      <div className="buttons-container">
        {isEditing ? (
          <button className="edit-button" onClick={handleSave}>Save</button>
        ) : (
          <button className="edit-button" onClick={handleEditClick}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;

