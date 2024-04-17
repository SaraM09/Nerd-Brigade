// src/Components/UserSignUp/UserSignUp.jsx

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import userHelpers from '../../Helpers/userHelpers'; // Import your user helper functions

const UserSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { userSignup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const authUser = await userSignup(email, password); // Firebase signup
      if (authUser) {
        // Create user in your database
        await userHelpers.create({
          username,
          email
        });
        navigate('/'); // Redirect after successful signup
        console.log('Signup successful');
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <h1>User Sign Up</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="Username" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default UserSignUp;
