// src/Components/TechLogIn/TechLogIn.jsx

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import techHelpers from '../../Helpers/techHelpers'; // Import techHelpers

const TechLogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext); // Assuming this logs in technicians
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password); // Authenticate technician
      if (user) {
        // Fetch technician details from your server after successful login
        const techDetails = await techHelpers.getById(user.uid);
        console.log('Login successful, technician details:', techDetails);
        navigate('/tech-dashboard'); // Redirect to a technician-specific dashboard
      }
    } catch (error) {
      console.error('Tech login failed:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Technician Log In</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
      <button type="submit">Log In</button>
    </form>
  );
};

export default TechLogIn;