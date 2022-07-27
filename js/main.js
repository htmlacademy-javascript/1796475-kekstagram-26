//import {createPhotoDescriptions} from './data.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
import {renderPhotos} from './render.js';
import './form.js';
import {setFormSubmit} from './form.js';
import './editor.js';
import {initListeners, showImgFilters} from './filters.js';
import './chose_photo.js';


const onGetDataSuccess = (data) => {
  renderPhotos(data);
  setFormSubmit();
  showImgFilters();
  initListeners(data);
};

getData(onGetDataSuccess, showAlert);
/*
const photoDescriptions = createPhotoDescriptions();
renderPhotos(photoDescriptions);
*/
