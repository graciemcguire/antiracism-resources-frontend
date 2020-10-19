import axios from 'axios';

// const BASE_URL = 'https://antiracism-api.herokuapp.com/'
const BASE_URL = 'http://localhost:3000/'

const getAllResources = async () => {
  const response = await axios(`${BASE_URL}/resources`);
  console.log('response.data in utils', response.data)
  return response.data;
}

export { getAllResources }
