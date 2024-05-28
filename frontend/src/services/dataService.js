// frontend/src/services/dataService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/data/';

const createData = async (name, value) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user || !user.token) {
    throw new Error('User is not authenticated');
  }
  const response = await axios.post(API_URL, { name, value }, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
  return response.data;
};

const getData = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user || !user.token) {
    throw new Error('User is not authenticated');
  }
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
  return response.data;
};

const updateData = async (id, name, value) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user || !user.token) {
    throw new Error('User is not authenticated');
  }
  const response = await axios.put(`${API_URL}${id}`, { name, value }, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
  return response.data;
};

const deleteData = async (id) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user || !user.token) {
    throw new Error('User is not authenticated');
  }
  const response = await axios.delete(`${API_URL}${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
  return response.data;
};

export default {
  createData,
  getData,
  updateData,
  deleteData,
};

