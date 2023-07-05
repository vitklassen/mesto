let root = document.querySelector('.page');
let editBtn = root.querySelector('.profile__edit-button');
let popup = root.querySelector('.popup');
let formElement = popup.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_name_firstname');
let jobInput = formElement.querySelector('.popup__input_name_user-info');
let nameUser = root.querySelector('.profile__name');
let jobUser = root.querySelector('.profile__job');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

function openPopup(modal) {
    modal.classList.add('popup_opened');
}
function closePopup(modal) {
    modal.classList.remove('popup_opened');
}
function closePopupClickButtton(evt) {
    const closeBtn = evt.target;
    if (closeBtn.classList.contains('popup__close-button')) {
        const currentPopup = closeBtn.closest('.popup');
        closePopup(currentPopup);
    }
}
function setPopupInputValue() {
    nameInput.value = nameUser.textContent;
    jobInput.value = jobUser.textContent;
}
function setNodeTextValue() {
    nameUser.textContent = nameInput.value;
    jobUser.textContent = jobInput.value;
}
function formSubmitHandler(evt) {
    evt.preventDefault();
    setNodeTextValue();
    closePopup(popup);
}
editBtn.addEventListener('click', function () {
    setPopupInputValue();
    openPopup(popup);
});
root.addEventListener('click', closePopupClickButtton);
formElement.addEventListener('submit', formSubmitHandler);