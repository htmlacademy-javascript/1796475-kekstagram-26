const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const effectsRadio = document.querySelectorAll('.effects__radio');
const effectLevelSlider = document.querySelector('.effect-level__slider');

const makeSmaller = () => {
  const currentValue = parseInt(scaleControlValue.value.match(/\d+/));
  if (currentValue > 25) { scaleControlValue.value = `${String (currentValue - 25)  }%`;
    imgUploadPreview.style = `transform: scale(${String (currentValue * 0.01 - 0.25)})`;
  }
};
const makeBigger = () => {
  const currentValue = parseInt(scaleControlValue.value.match(/\d+/));
  if (currentValue < 100) { scaleControlValue.value = `${String (currentValue + 25)  }%`;
    imgUploadPreview.style = `transform: scale(${String (currentValue * 0.01 + 0.25)})`;
  }
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

effectLevelSlider.classList.add('hidden');

effectsRadio.forEach((effectRadio) => effectRadio.addEventListener('click', () => {
  imgUploadPreview.classList = `img-upload__preview  effects__preview--${ effectRadio.value}`;
  if (effectsRadio[0].checked) {
    effectLevelSlider.classList.add('hidden');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    });
    imgUploadPreview.style = '';
  } else if (effectsRadio[1].checked) {
    effectLevelSlider.classList.remove('hidden');
    effectLevelSlider.noUiSlider.on('update', () => {
      const sliderValue = String (effectLevelSlider.noUiSlider.get());
      imgUploadPreview.style = `filter: grayscale(${sliderValue})`;
    });
  } else if (effectsRadio[2].checked) {
    effectLevelSlider.classList.remove('hidden');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    });
    effectLevelSlider.noUiSlider.on('update', () => {
      const sliderValue = String (effectLevelSlider.noUiSlider.get());
      imgUploadPreview.style = `filter: sepia(${sliderValue})`;
    });
  } else if (effectsRadio[3].checked) {
    effectLevelSlider.classList.remove('hidden');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    });
    effectLevelSlider.noUiSlider.on('update', () => {
      const sliderValue = String (effectLevelSlider.noUiSlider.get());
      imgUploadPreview.style = `filter: invert(${sliderValue}%)`;
    });
  } else if (effectsRadio[4].checked) {
    effectLevelSlider.classList.remove('hidden');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    });
    effectLevelSlider.noUiSlider.on('update', () => {
      const sliderValue = String (effectLevelSlider.noUiSlider.get());
      imgUploadPreview.style = `filter: blur(${sliderValue}px)`;
    });
  } else if (effectsRadio[5].checked) {
    effectLevelSlider.classList.remove('hidden');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    });
    effectLevelSlider.noUiSlider.on('update', () => {
      const sliderValue = String (effectLevelSlider.noUiSlider.get());
      imgUploadPreview.style = `filter: brightness(${sliderValue})`;
    });
  }
}));

scaleControlSmaller.addEventListener('click', makeSmaller);
scaleControlBigger.addEventListener('click', makeBigger);
