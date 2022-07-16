import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const uploadFile = imgUploadForm.querySelector('#upload-file');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const uploadCancel = imgUploadOverlay.querySelector('#upload-cancel');
const textHashtags = imgUploadOverlay.querySelector('.text__hashtags');
const textDescription = imgUploadOverlay.querySelector('.text__description');
const maxHashtagsNumber = 5;
const hashTagRegexp = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const onLoadingEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    if (textHashtags !== document.activeElement && textDescription !== document.activeElement) {
      evt.preventDefault();
      imgUploadOverlay.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  }
};
const loading = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onLoadingEscKeydown);
};

const closeLoading = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.removeEventListener('change', loading);
};

const createHashtagsArray = () => textHashtags.value.trim().toLowerCase().split(/\s+/);

const isCorrectHashtag = (element) => hashTagRegexp.test(element);

const isCorrectHashtagsNumber = () => createHashtagsArray().length <= maxHashtagsNumber;

const validateHashtags = () => createHashtagsArray().every(isCorrectHashtag) || textHashtags.value === '';

const pristine = new Pristine(imgUploadForm, {
  classTo:'img-upload__field-wrapper',
  errorTextParent:'img-upload__field-wrapper',
});

pristine.addValidator(textHashtags, validateHashtags, 'строка после решётки не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации, эмодзи');
pristine.addValidator(textHashtags, isCorrectHashtagsNumber, `максимальное количество хэштегов - ${maxHashtagsNumber}`);

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

uploadFile.addEventListener('change', loading);
uploadCancel.addEventListener('click', closeLoading);

