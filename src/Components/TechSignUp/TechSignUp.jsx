// src/Components/TechSignUp/TechSignUp.jsx

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import techHelpers from '../../Helpers/techHelpers'; // Import techHelpers

const TechSignUp = () => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const { technicianSignup } = useContext(AuthContext); // Assuming this signs up technicians in Firebase or similar auth system
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Perform Firebase or similar authentication signup
      await technicianSignup(name, contactInfo);
      // On successful authentication, register the technician in the database
      await techHelpers.create({ name, contactInfo });
      navigate('/dashboard'); // Redirect after successful signup
    } catch (error) {
      console.error('Tech signup failed:', error);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <h1>Technician Sign Up</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name" />
      <input type="text" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} required placeholder="Contact Info" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default TechSignUp;

