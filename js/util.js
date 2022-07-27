const SHOW_ALERT_TIME = 5000;
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
  }, SHOW_ALERT_TIME);
};
// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}
// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_throttle

function throttle (callback, delayBetweenFrames) {
  // Используем замыкания, чтобы время "последнего кадра" навсегда приклеилось
  // к возвращаемой функции с условием, тогда мы его сможем перезаписывать
  let lastTime = 0;

  return (...rest) => {
    // Получаем текущую дату в миллисекундах,
    // чтобы можно было в дальнейшем
    // вычислять разницу между кадрами
    const now = new Date();

    // Если время между кадрами больше задержки,
    // вызываем наш колбэк и перезаписываем lastTime
    // временем "последнего кадра"
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}
export {getRandomInteger, checkLength, getUniqueInteger, getRandomElement, isEscapeKey, showAlert, debounce, throttle};
