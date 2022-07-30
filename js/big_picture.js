import {isEscapeKey} from './util.js';

const QUANTITY_SHOWN_COMMENTS = [0, 5];

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const similarCommentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsCount = bigPicture.querySelector('.comments-count');
const visibleCommentsCount = bigPicture.querySelector('.visible-comments-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const onBigPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
};

const renderComment = ({avatar, message, name}) => {
  const commentElement = similarCommentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;
  return commentElement;
};

const hideCommentsLoader = () => {
  if (bigPicture.querySelectorAll('.social__comment.hidden').length === 0) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const onCommentsLoaderClick = () => {
  Array.from(bigPicture.querySelectorAll('.social__comment.hidden')).slice(...QUANTITY_SHOWN_COMMENTS).forEach((element) => element.classList.remove('hidden'));
  visibleCommentsCount.textContent = bigPicture.querySelectorAll('.social__comment:not(.hidden)').length;
  hideCommentsLoader();
};

const showBigPicture = ({url, likes, comments, description}) => {
  bigPicture.querySelector('.social__comments').textContent = '';
  bigPicture.querySelector('.big-picture__img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  commentsCount.textContent = comments.length;
  bigPicture.querySelector('.social__comments').append(...comments.map(renderComment));
  bigPicture.querySelector('.social__caption').textContent = description;
  onCommentsLoaderClick();
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onBigPictureEscKeydown);
  bigPicture.classList.remove('hidden');
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
};

bigPictureCancel.addEventListener('click', closeBigPicture);

export{showBigPicture, closeBigPicture};
