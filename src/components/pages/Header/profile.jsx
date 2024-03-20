// Profile.jsx

import React, { useState, useContext } from 'react';
import './profile.css';
import { ProfileContext } from '../Header/profilecontext'; // Ensure correct import path

const Profile = () => {
  const [formData, setFormData] = useState({});
  const { profileData, updateProfileData } = useContext(ProfileContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    updateProfileData(formData);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>My Profile</h2>
      </div>
      <div className="profile-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name || profileData.name || ''} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email || profileData.email || ''} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone || profileData.phone || ''} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={formData.address || profileData.address || ''} onChange={handleChange} />
          </div>
          <button type="submit">Save</button>
        </form>
        <div className="profile-details">
          <h3>Your Profile Details:</h3>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          <p>Phone: {profileData.phone}</p>
          <p>Address: {profileData.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
