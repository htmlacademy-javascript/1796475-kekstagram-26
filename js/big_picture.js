import {isEscapeKey} from './util.js';

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

const hideComments = () => {
  bigPicture.querySelectorAll('.social__comment').forEach((element, i) => {
    if (i>4) {
      element.classList.add('hidden');
    }
  });
};

const uploadMoreComments = () => {
  bigPicture.querySelectorAll('.social__comment.hidden').forEach((element, i) => {
    if (i<5) {
      element.classList.remove('hidden');
    }
  });
  visibleCommentsCount.textContent = bigPicture.querySelectorAll('.social__comment').length - bigPicture.querySelectorAll('.social__comment.hidden').length;
};

const showBigPicture = ({url, likes, comments, description}) => {
  bigPicture.querySelector('.social__comments').textContent = '';
  bigPicture.querySelector('.big-picture__img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  commentsCount.textContent = comments.length;
  bigPicture.querySelector('.social__comments').append(...comments.map(renderComment));
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.classList.remove('hidden');
  //document.querySelector('.social__comment-count').classList.add('hidden');
  //document.querySelector('.comments-loader').classList.add('hidden');
  hideComments();
  visibleCommentsCount.textContent = comments.length - bigPicture.querySelectorAll('.social__comment.hidden').length;
  commentsLoader.addEventListener('click', uploadMoreComments);
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onBigPictureEscKeydown);
};


const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
};

bigPictureCancel.addEventListener('click', closeBigPicture);

export{showBigPicture, closeBigPicture};
