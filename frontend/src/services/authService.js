// frontend/src/services/authService.js
// import axios from 'axios';

// const API_URL = 'http://localhost:4000';

// export const login = async (email, password) => {
//   const response = await axios.post(`${API_URL}/login`, { email, password });
//   return response.data;
// };

// export const register = async (email, password) => {
//   const response = await axios.post(`${API_URL}/register`, { email, password });
//   return response.data;
// };

import axios from 'axios';

const API_URL = 'http://localhost:4000/api/auth/';

const register = async (name, email, password) => {
  try {
    const response = await axios.post(API_URL + 'register', { name, email, password });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An error occurred during registration');
    }
  }
};

const login = async (email, password) => {
  
  try {
    const response = await axios.post(API_URL + 'login', { email, password });
    if (response.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An error occurred during login');
    }
  }
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
