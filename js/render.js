import {showBigPicture, closeBigPicture} from './big_picture.js';
import {getUniqueInteger} from './util.js';

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
  similarListElement.querySelectorAll('.picture').forEach((element) => {
    element.remove();
  });
  similarListElement.append(...photos.map(renderPhoto));
};

const getCommentsLength = (photoElement) => Number(photoElement.querySelector('.picture__comments').textContent);

const moreDiscussed = (photoElenentA, photoElenentB) => {
  const commentsLengthA = getCommentsLength(photoElenentA);
  const commentsLengthB = getCommentsLength(photoElenentB);

  return commentsLengthB - commentsLengthA;
};

const renderDiscussedPhotos = (photos) => {
  similarListElement.querySelectorAll('.picture').forEach((element) => {
    element.remove();
  });
  similarListElement.append(...photos.map(renderPhoto).slice().sort(moreDiscussed));
};

const renderRandomPhotos = (photos) => {
  similarListElement.querySelectorAll('.picture').forEach((element) => {
    element.remove();
  });

  for (let i = 0; i < 10; i++) {
    const randomPhotos = photos[getUniqueInteger(0, photos.length - 1)];
    similarListElement.append(...randomPhotos.map(renderPhoto));
  }
};

closeBigPicture();

export {renderPhotos, renderDiscussedPhotos, renderRandomPhotos};
