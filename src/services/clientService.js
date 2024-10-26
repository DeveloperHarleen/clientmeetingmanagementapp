import axios from 'axios';

const API_URL = 'http://localhost:3000/clients';

export const createClient = (clientData) => {
  return axios.post(API_URL, clientData);
};



