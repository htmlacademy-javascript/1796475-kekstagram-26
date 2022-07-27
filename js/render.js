import {showBigPicture} from './big_picture.js';

const RANDOM_PHOTOS_QUANTITY = 10;

const similarListElement = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const renderPhoto = ({url, likes, comments, description}) => {

  const photoElement = similarPictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;

  photoElement.addEventListener('click', () => showBigPicture({url, likes, comments, description}));

  return photoElement;
};

const clearSimilarList = () => {
  similarListElement.querySelectorAll('.picture').forEach((element) => {
    element.remove();
  });
};

const renderPhotos = (photos) => {
  clearSimilarList();
  similarListElement.append(...photos.map(renderPhoto));
};

const sortMoreDiscussed = (photoA, photoB) => photoA.comments.length > photoB.comments.length ? -1 : 1;

const renderDiscussedPhotos = (photos) => {
  clearSimilarList();
  similarListElement.append(...photos.slice().sort(sortMoreDiscussed).map(renderPhoto));
};

const renderRandomPhotos = (photos) => {
  clearSimilarList();
  similarListElement.append(...photos.sort(() => Math.random() - Math.random()).slice(0, RANDOM_PHOTOS_QUANTITY).map(renderPhoto));
};

export {renderPhotos, renderDiscussedPhotos, renderRandomPhotos};
