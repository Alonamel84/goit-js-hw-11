import './sass/main.scss';
import makeImageMarkup from './templates.hbs';
import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const imgNode = document.querySelector('.gallery');
const urlRoute = 'https://pixabay.com/api/';
const key = 'key=23793325-ff2052386c334e2849b34704b';
const filterName = `${urlRoute}?${key}&image_type=photo`;

const submitNode = document.querySelector('#search-form');
const inputNode = document.querySelector('input');
const loadMoreBtn = document.querySelector('.load-more-btn');
const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
});

submitNode.addEventListener('submit', async e => {
  e.preventDefault();
  loadMoreBtn.classList.add('is-hidden');

  imgNode.innerHTML = '';
  page = 1;
  const inputSearch = encodeURIComponent(inputNode.value);
  const data = await requestServer(`${filterName}&q=${inputSearch}&per_page=40`);
  renderImages(data);
  if (data.totalHits === 0) {
    return Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.',
    );
  }
  if (document.querySelectorAll('.photo-card').length >= data.totalHits) {
    Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
    return loadMoreBtn.classList.add('is-hidden');
  }

  loadMoreBtn.classList.remove('is-hidden');
});

const requestServer = async filterName => {
  const response = await axios.get(filterName);
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  throw new Error('Opps error');
};

// const requestServer = async (filterName, method = 'GET', body = {}) => {
//   // axios.get(url[, config])
//   const option = {
//     method,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   if (method !== 'GET' && method !== 'DELETE') option.body = JSON.stringify(body);

//   try {
//     const response = await fetch(filterName);
//     if (response.status >= 200 && response.status < 300) return response.json();
//     throw response;
//   } catch (error) {
//     console.error('ERROR REQUEST');
//     return Promise.reject(error);
//   }
// };

const renderImages = ({ hits }) => {
  const markup = makeImageMarkup(hits);
  imgNode.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
};
let page = 1;
const onNextPage = async e => {
  e.preventDefault();
  page++;

  const inputSearch = encodeURIComponent(inputNode.value);
  const data = await requestServer(`${filterName}&q=${inputSearch}&page=${page}`);
  renderImages(data);
  if (document.querySelectorAll('.photo-card').length >= data.totalHits) {
    loadMoreBtn.classList.add('is-hidden');
    Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
  }
};
loadMoreBtn.addEventListener('click', onNextPage);

document.addEventListener('keydown', function (e) {
  if (!instance && !instance.visible()) return false;
  if (e.key === 'Escape') {
    instance.close();
  }
});
