import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
// ДОДАНО: визначення лоадера
const loaderContainer = document.querySelector('.loader-container');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
      <!-- Обгортка-посилання для SimpleLightbox -->
      <a class="gallery-link" href="${largeImageURL}">
        <img 
          class="gallery-image" 
          src="${webformatURL}" 
          alt="${tags}" 
          title="${tags}" 
        />
      </a>
      <div class="info">
        <div class="info-item"><b>Likes</b><span>${likes}</span></div>
        <div class="info-item"><b>Views</b><span>${views}</span></div>
        <div class="info-item"><b>Comments</b><span>${comments}</span></div>
        <div class="info-item"><b>Downloads</b><span>${downloads}</span></div>
      </div>
    </li>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  // Обов'язково оновлюємо екземпляр після додавання нових елементів
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  if (loaderContainer) loaderContainer.classList.add('is-visible');
}

export function hideLoader() {
  if (loaderContainer) loaderContainer.classList.remove('is-visible');
}
