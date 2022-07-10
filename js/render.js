const similarListElement = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhoto = (photos) => {
  const similarListFragment = document.createDocumentFragment();

  const makePhotoElement = ({url, likes, comments}) => {

    const photoElement = similarPictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    similarListFragment.appendChild(photoElement);
  };

  photos.forEach(makePhotoElement);

  similarListElement.appendChild(similarListFragment);

};

export {renderPhoto};
