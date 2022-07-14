import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const uploadFile = imgUploadForm.querySelector('#upload-file');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const uploadCancel = imgUploadOverlay.querySelector('#upload-cancel');
const textHashtags = imgUploadOverlay.querySelector('.text__hashtags');
const textDescription = imgUploadOverlay.querySelector('.text__description');
const imgUploadSubmit = imgUploadOverlay.querySelector('.img-upload__submit');

const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const onLoadingEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};
const loading = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onLoadingEscKeydown);
};
uploadFile.addEventListener('change', loading);

const closeLoading = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.removeEventListener('change', loading);
};

uploadCancel.addEventListener('click', closeLoading);

const pristine = new Pristine(imgUploadForm);

const validateHashtags = () => {
  const hashtagsArray = textHashtags.value.trim().toLowerCase().split(/\s+/);
  hashtagsArray.length <= 5 && hashtagsArray.every((element) => element !== re );
};

pristine.addValidator(textHashtags, validateHashtags, 'некорректный набор хэштегов');

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});

