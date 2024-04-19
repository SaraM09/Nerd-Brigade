// src/Components/UserLogIn/UserLogIn.jsx

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import userHelpers from '../../Helpers/userHelpers';

const UserLogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password); // Firebase login
      if (user) {
        const userDetails = await userHelpers.getById(user.uid); // Fetch user details from your server
        console.log('Login successful, user details:', userDetails);
        navigate('/dashboard'); // Redirect to a dashboard or home page
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>User Log In</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
      <button type="submit">Log In</button>
    </form>
  );
};

export default UserLogIn;
