import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';

const getPublicContent = () => {
  return axios.get(API_URL + 'all');
};

const getUserBoard = () => {
  return axios.get(API_URL + 'user', { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + 'admin', { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getAdminBoard,
};
