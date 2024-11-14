import axios from 'axios';

//TODO: Restore original file (base url)
const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 50000,
});

export default AxiosInstance;
