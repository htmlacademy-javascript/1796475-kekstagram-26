const similarListElement = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhoto = ({url, likes, comments}) => {

  const photoElement = similarPictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  return photoElement;
};

const renderPhotos = (photos) => {
  similarListElement.append(...photos.map(renderPhoto));
};

export {renderPhotos};
