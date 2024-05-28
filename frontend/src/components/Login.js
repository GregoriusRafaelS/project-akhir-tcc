import React, { useState } from 'react';
import authService from '../services/authService';
// import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(email, password);
      // const response = await axios.post(`${process.env.REACT_APP_AUTH_SERVICE_URL}/login`, {
      //   email,
      //   password
      // });
      localStorage.setItem('token', response.token);
      alert('Login successful');
    } catch (error) {
      alert('Error logging in');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
