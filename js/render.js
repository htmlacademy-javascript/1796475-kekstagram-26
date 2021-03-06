import {showBigPicture, closeBigPicture} from './big_picture.js';

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

const renderPhotos = (photos) => {
  similarListElement.append(...photos.map(renderPhoto));
};

closeBigPicture();

export {renderPhotos};
