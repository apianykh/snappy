import axios from 'axios';

const Http = axios.create({
  baseURL: `/api`,
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
  responseType: 'json'
});

export default Http;