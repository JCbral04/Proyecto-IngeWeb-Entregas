import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update this with your actual backend URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the auth token if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getDashboardStats = async () => {
  try {
    const response = await api.get('/dashboard/stats');
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    throw error;
  }
};

export const getRecentActivity = async () => {
  try {
    const response = await api.get('/dashboard/activity');
    return response.data;
  } catch (error) {
    console.error('Error fetching recent activity:', error);
    throw error;
  }
};

export default api;
