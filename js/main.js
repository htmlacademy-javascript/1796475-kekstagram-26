// Функция, возвращающая случайное целое число из переданного диапазона включительно
// Логика для функции взята с ресурса https://learn.javascript.ru/task/random-int-min-max
function getRandomInteger (min, max) {
  // случайное число от min до (max+1)
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
}

//Функция для проверки максимальной длины строки
function checkLength(inputString, maxLength) {
  return inputString.length <= maxLength;
}

getRandomInteger (0, 10);
checkLength ('город', 10);
