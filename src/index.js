import './sass/main.scss';
// import makeImageMarkup from './templates.hbs';
// import axios from 'axios';
// import Notiflix from 'notiflix';

// const imgNode = document.querySelector('.gallery');
// const urlRoute = 'https://pixabay.com/api/';
// const key = 'key=23793325-ff2052386c334e2849b34704b';
// const filterName = `${urlRoute}?${key}&image_type=photo`;

const submitNode = document.querySelector('#search-form');
// const inputNode = document.querySelector('input');
// const loadMoreBtn = document.querySelector('.load-more-btn');

submitNode.addEventListener('submit', async e => {
  e.preventDefault();
  console.log('ok');
  //   imgNode.innerHTML = '';
  //   page = 1;
  //   const inputSearch = encodeURIComponent(inputNode.value);
  //   const data = await requestServer(`${filterName}&q=${inputSearch}&per_page=40`);
  //   console.log(data);
  //   console.log(data.hits.length);

  //   renderImages(data);
  //   console.log(document.querySelectorAll('.photo-card').length);
  //   if (document.querySelectorAll('.photo-card').length >= data.totalHits)
  //     return Notiflix.Notify.failure('Qui timide rogat docet negare');
  //   //   loadMoreBtn.disabled = false;
  //   loadMoreBtn.classList.remove('is-hidden');
});

// const requestServer = async (filterName, method = 'GET', body = {}) => {
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
//     // if ((response.status ===404) return Notiflix.Notify.failure('Qui timide rogat docet negare');
//   } catch (error) {
//     console.error('ERROR REQUEST');
//     return Promise.reject(error);
//   }
// };

// const renderImages = ({ hits }) => {
//   const markup = makeImageMarkup(hits);
//   imgNode.insertAdjacentHTML('beforeend', markup);
// };
// let page = 1;
// const onNextPage = async e => {
//   e.preventDefault();
//   page++;

//   const inputSearch = encodeURIComponent(inputNode.value);
//   const data = await requestServer(`${filterName}&q=${inputSearch}&page=${page}`);
//   renderImages(data);
//   //   loadMoreBtn.disabled = true;
// };
// loadMoreBtn.addEventListener('click', onNextPage);
