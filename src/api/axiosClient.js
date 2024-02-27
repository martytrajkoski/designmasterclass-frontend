import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const axiosClient  = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-type": 'application/json',
  },
});

axiosClient.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token'); // Assuming you're storing token in localStorage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  

export default axiosClient ;