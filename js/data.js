import {getRandomInteger, getUniqueInteger, getRandomElement} from './util.js';

const PHOTO_DESCRIPTION_COUNT = 25;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Сергей',
  'Ксения',
  'Олег',
  'Ольга',
  'Артур',
  'Александра',
  'Максим',
  'Марина',
  'Ян',
  'Анжелика',
];

const createComment = () => ({
  id: getUniqueInteger (1, 1000),
  avatar: `img/avatar-${getRandomInteger (1, 6)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

const createComments = (quantity) => Array.from({length: quantity}, createComment);

const createPhotoDescription = (_,id) => ({
  id: id+1,
  url: `photos/${id + 1}.jpg`,
  description: 'Красивая картинка',
  likes: getRandomInteger(15, 200),
  comments: createComments(getRandomInteger(0, 15)),
});

const createPhotoDescriptions = () => {
  Array.from({length: PHOTO_DESCRIPTION_COUNT}, createPhotoDescription);
};

export {createPhotoDescriptions};
