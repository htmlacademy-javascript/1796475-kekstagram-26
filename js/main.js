// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomInteger(min, max) {
  // случайное число от min до (max+1)
  let randomNumber;
  if (min > max) {
    randomNumber = max + Math.random() * (min + 1 - max);
  } else {
    randomNumber = min + Math.random() * (max + 1 - min);
  }
  return Math.floor(randomNumber);
}

//Функция для проверки максимальной длины строки
function checkLength(inputString, maxLength) {
  return inputString.length <= maxLength;
}

getRandomInteger(0, 10);
checkLength('город', 10);
