import axios from 'axios';

const API_URL = 'http://localhost:3021';

export const searchFood = async (term: string) => {
  const response = await axios.get(`${API_URL}/food/search?term=${term}`);
  return response.data;
};
