import {createPhotoDescriptions} from './data.js';
import {renderPhoto} from './render.js';

const photoDescriptions = createPhotoDescriptions();

renderPhoto(photoDescriptions);
