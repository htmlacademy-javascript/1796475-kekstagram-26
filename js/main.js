import {createPhotoDescriptions} from './data.js';
import {renderPhotos} from './render.js';
import './form.js';

const photoDescriptions = createPhotoDescriptions();

renderPhotos(photoDescriptions);
