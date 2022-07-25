const GET_ADDRESS = 'https://26.javascript.pages.academy/kekstagram/data';
const SEND_ADDRESS = 'https://26.javascript.pages.academy/kekstagram';

const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch(GET_ADDRESS);
    if(!response.ok) {
      throw new Error('Не удалось загрузить фотографии');
    }
    const offers = await response.json();
    onSuccess(offers);
  } catch (error) {
    onFail(error.message);
  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(
      SEND_ADDRESS,
      {
        method: 'POST',
        body,
      }
    );
    if(!response.ok) {
      throw new Error('Не удалось загрузить фотографии');
    }
    onSuccess();
  } catch (error) {
    onFail(error.message);
  }
};

export {getData, sendData};
