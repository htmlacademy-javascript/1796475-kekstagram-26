import {renderPhotos, renderDiscussedPhotos, renderRandomPhotos} from './render.js';
import {debounce} from './util.js';

const imgFilters = document.querySelector('.img-filters');
const filtersButtons = document.querySelectorAll('.img-filters__button');
const filterDefaultButton = document.querySelector('#filter-default');
const filterRandomButton = document.querySelector('#filter-random');
const filterDiscussedButton = document.querySelector('#filter-discussed');

const setActiveFilter = (filterElement) => {
  filtersButtons.forEach((button) => button.classList.remove('img-filters__button--active'));
  filterElement.classList.add('img-filters__button--active');
};

const showDefaultPhotos = (photos) => {
  setActiveFilter(filterDefaultButton);
  renderPhotos(photos);
};

const showRandomPhotos = (photos) => {
  setActiveFilter(filterRandomButton);
  renderRandomPhotos(photos);
};

const showDiscussedPhotos = (photos) => {
  setActiveFilter(filterDiscussedButton);
  renderDiscussedPhotos(photos);
};

const showImgFilters = () => {
  imgFilters.classList.remove('img-filters--inactive');
};

const initListeners = (photos) => {
  filterDefaultButton.addEventListener('click', debounce(() => showDefaultPhotos(photos)));
  filterRandomButton.addEventListener('click', debounce(() => showRandomPhotos(photos)));
  filterDiscussedButton.addEventListener('click', debounce(() => showDiscussedPhotos(photos)));
};

export {initListeners, showImgFilters};
