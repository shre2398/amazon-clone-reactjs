import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/react-amaze-on-clone/us-central1/api'
  // The API URL (cloud function)
});

export default instance;
