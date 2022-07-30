const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const STYLE_SCALE_STEP = 0.25;
const PERCENT = 0.01;

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const preview = document.querySelector('.img-upload__preview > img');
const effectsRadio = document.querySelectorAll('.effects__radio');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.img-upload__effect-level');

const onScaleControlSmallerClick = () => {
  const currentValue = Number(scaleControlValue.value.match(/\d+/));
  if (currentValue > MIN_SCALE) { scaleControlValue.value = `${String (currentValue - SCALE_STEP)  }%`;
    preview.style = `transform: scale(${String (currentValue * PERCENT - STYLE_SCALE_STEP)})`;
  }
};
const onScaleControlBiggerClick = () => {
  const currentValue = Number(scaleControlValue.value.match(/\d+/));
  if (currentValue < MAX_SCALE) { scaleControlValue.value = `${String (currentValue + SCALE_STEP)  }%`;
    preview.style = `transform: scale(${String (currentValue * PERCENT + STYLE_SCALE_STEP)})`;
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

effectLevel.classList.add('hidden');

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
  preview.classList = `effects__preview--${effect}`;
  const settings = effectSettings[effect];
  if (settings) {
    effectLevel.classList.remove('hidden');
    effectLevelSlider.noUiSlider.updateOptions(settings.slider);
    return;
  }
  effectLevel.classList.add('hidden');
  preview.style.filter = '';
};

const onChangeFilter = () => {
  const effectElement = document.querySelector('.effects__radio:checked');
  const sliderValue = String (effectLevelSlider.noUiSlider.get());
  const settings = effectSettings[effectElement.value];
  if (settings) {
    preview.style.filter = `${settings.filter}(${sliderValue}${settings.units})`;
  }
};

effectsRadio.forEach((effectRadio) => effectRadio.addEventListener('click', (evt) => changeEffect(evt.target.value)));
effectLevelSlider.noUiSlider.on('update', onChangeFilter);
scaleControlSmaller.addEventListener('click', onScaleControlSmallerClick);
scaleControlBigger.addEventListener('click', onScaleControlBiggerClick);
