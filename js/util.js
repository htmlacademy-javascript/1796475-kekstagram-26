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

// ошибка сервера

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.bottom = '0';
  alert.style.margin = '7px auto auto auto';
  alert.style.padding = '15px';
  alert.style.fontSize = '40px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.style.width = 'max-content';
  alert.style.height = 'max-content';
  alert.style.border = '3px solid white';
  alert.style.borderRadius = '5px';
  alert.textContent = `Error: ${message}`;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, 5000);
};


export {getRandomInteger, checkLength, getUniqueInteger, getRandomElement, isEscapeKey, showAlert};
