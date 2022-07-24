import {createPhotoDescriptions} from './data.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
import {renderPhotos} from './render.js';
import './form.js';
import './editor.js';

const onGetDataSuccess = (data) => {
  renderPhotos(data);
};

getData(onGetDataSuccess, showAlert);
/*
const photoDescriptions = createPhotoDescriptions();
renderPhotos(photoDescriptions);
*/
