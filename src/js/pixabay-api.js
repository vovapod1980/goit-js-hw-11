import axios from 'axios';

const API_KEY = '55036225-8ce8ea9a0711c46d4e7453374';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  // ВИПРАВЛЕНО: прибрано слеш, axios.get('') зробить запит прямо на baseURL
  const response = await axios.get('', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}
