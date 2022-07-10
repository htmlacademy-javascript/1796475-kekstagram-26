// Функция, возвращающая случайное целое число из переданного диапазона включительно
// Логика для функции взята с ресурса https://learn.javascript.ru/task/random-int-min-max
const getRandomInteger = (min, max) => {
  // случайное число от min до (max+1)
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

//Функция для проверки максимальной длины строки
const checkLength = (inputString, maxLength) => inputString.length <= maxLength;

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

const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// проверка нажатия Esc
const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInteger, checkLength, getUniqueInteger, getRandomElement, isEscapeKey};
