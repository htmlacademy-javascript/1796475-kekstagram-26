
import {createPhotoDescriptions} from './data.js';

const similarListElement = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photoDescriptions = createPhotoDescriptions();

const similarListFragment = document.createDocumentFragment();

photoDescriptions.forEach(({url, likes, comments}) => {
  const photoElement = similarPictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  similarListFragment.appendChild(photoElement);
});

similarListElement.appendChild(similarListFragment);

