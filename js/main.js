import {createPhotoDescriptions} from './data.js';
import {renderPhotos} from './render.js';

const photoDescriptions = createPhotoDescriptions();

renderPhotos(photoDescriptions);
