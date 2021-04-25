import axios from 'axios';

const instance = axios.create({
  baseURL: '...' // The API URL (cloud function)
});

export default instance;
