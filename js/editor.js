const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const effectsRadio = document.querySelectorAll('.effects__radio');
const effectLevelSlider = document.querySelector('.effect-level__slider');

const makeSmaller = () => {
  const currentValue = Number(scaleControlValue.value.match(/\d+/));
  if (currentValue > 25) { scaleControlValue.value = `${String (currentValue - 25)  }%`;
    imgUploadPreview.style = `transform: scale(${String (currentValue * 0.01 - 0.25)})`;
  }
};
const makeBigger = () => {
  const currentValue = Number(scaleControlValue.value.match(/\d+/));
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

const effectSettings = {
  chrome:{
    slider: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    },
    filter: 'grayscale',
    units: '',
  },
  sepia:{
    slider: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    },
    filter: 'sepia',
    units: '',
  },
  marvin:{
    slider: {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    },
    filter: 'invert',
    units: '%',
  },
  phobos:{
    slider: {
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    },
    filter: 'blur',
    units: 'px',
  },
  heat:{
    slider: {
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    },
    filter: 'brightness',
    units: '',
  },
};

const changeEffect = (effect) => {
  imgUploadPreview.classList = `img-upload__preview  effects__preview--${effect}`;
  const settings = effectSettings[effect];
  if (settings) {
    effectLevelSlider.classList.remove('hidden');
    effectLevelSlider.noUiSlider.updateOptions(settings.slider);
    return;
  }
  effectLevelSlider.classList.add('hidden');
  imgUploadPreview.style.filter = '';
};

const onChangeFilter = () => {
  const effectElement = document.querySelector('.effects__radio:checked');
  const sliderValue = String (effectLevelSlider.noUiSlider.get());
  const settings = effectSettings[effectElement.value];
  if (settings) {
    imgUploadPreview.style.filter = `${settings.filter}(${sliderValue}${settings.units})`;
  }
};

effectsRadio.forEach((effectRadio) => effectRadio.addEventListener('click', (evt) => changeEffect(evt.target.value)));
effectLevelSlider.noUiSlider.on('update', onChangeFilter);
scaleControlSmaller.addEventListener('click', makeSmaller);
scaleControlBigger.addEventListener('click', makeBigger);
