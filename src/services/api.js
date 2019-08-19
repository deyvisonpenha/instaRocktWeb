import axios from 'axios';

require('dotenv').config();

const api = axios.create({
  baseURL: process.env.REACT_APP_URL
  //baseURL: "https://instarocketapi.herokuapp.com",
});

export default api;