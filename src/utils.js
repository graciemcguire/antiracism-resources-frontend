import axios from 'axios';

// const BASE_URL = 'https://antiracism-api.herokuapp.com/'
const BASE_URL = 'http://localhost:3000/'

const getAllResources = async () => {
  const response = await axios(`${BASE_URL}/resources`);
  return response.data;
}

export { getAllResources }

