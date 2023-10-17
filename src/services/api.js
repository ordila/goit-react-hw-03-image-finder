import axios from 'axios';
const Base_URL = 'https://pixabay.com/api';
const API_KEY = '39421409-9e9b7072924fda42bb38c6b65';
const instance = axios.create({ baseURL: Base_URL });
export const requestPosts = async (query = 'cat', page = 1) => {
  const { data } = await instance.get(`/?q=${query}`, {
    params: {
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return data;
};
