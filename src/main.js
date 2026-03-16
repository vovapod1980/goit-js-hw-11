import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  // ВИПРАВЛЕНО: Отримуємо значення поля за іменем "search-text"
  const query = event.currentTarget.querySelector('input').value.trim();

  if (query === '') {
    iziToast.warning({
      message: 'Please enter a search term',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `An error occurred: ${error.message}`,
      position: 'topRight',
    });
  } finally {
    hideLoader();
    event.target.reset();
  }
});
