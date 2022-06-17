// Функция, возвращающая случайное целое число из переданного диапазона включительно
// Логика для функции взята с ресурса https://learn.javascript.ru/task/random-int-min-max
const getRandomInteger = (min, max) => {
  // случайное число от min до (max+1)
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

//Функция для проверки максимальной длины строки
const checkLength = (inputString, maxLength) => inputString.length <= maxLength;

getRandomInteger (0, 10);
checkLength ('город', 10);

const PHOTO_DESCRIPTION_COUNT = 25;

// Функция, возвращающая случайное не повторяющееся целое число из переданного диапазона включительно
const uniqueIntegers = [];
const  getUniqueInteger = (min, max) => {
  for (let i = 1; i <= max + 1; i++) {
    const integer = getRandomInteger (min, max);
    if (uniqueIntegers.indexOf(integer) === -1) {
      uniqueIntegers.push(integer);
      return integer;
    }
  }
  return max;
};

getUniqueInteger (0, 10);

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

const getRandomElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const createComment = (_,id) => ({
  id: getUniqueInteger (1, 1000),
  avatar: 'img/avatar-' + getRandomInteger (1, 6) + '.svg',
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

const createComments = (quantity) => Array.from({length: quantity}, createComment);

const createPhotoDescription = (_,id) => ({
  id: id+1,
  url: 'photos/' + (id + 1) + '.jpg',
  description: 'Красивая картинка',
  likes: getRandomInteger(15, 200),
  comments: createComments(getRandomInteger(0, 15)),
});

const photoDescription = Array.from({length: PHOTO_DESCRIPTION_COUNT}, createPhotoDescription);

console.log(photoDescription);
