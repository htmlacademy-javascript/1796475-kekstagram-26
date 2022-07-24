import {createPhotoDescriptions} from './data.js';
import {renderPhotos} from './render.js';
import './form.js';
import './editor.js';

const photoDescriptions = createPhotoDescriptions();

renderPhotos(photoDescriptions);
