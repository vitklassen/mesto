let root = document.querySelector('.page');
let editBtn = root.querySelector('.profile__edit-button');
let addBtn = root.querySelector('.profile__add-button');
let editPopup = root.querySelector('.popup_type_edit');
let formEditElement = editPopup.querySelector('.popup__form');
let addPopup = root.querySelector('.popup_type_add');
let formAddElement = addPopup.querySelector('.popup__form');
let nameInput = formEditElement.querySelector('.popup__input_name_firstname');
let jobInput = formEditElement.querySelector('.popup__input_name_user-info');
let nameUser = root.querySelector('.profile__name');
let jobUser = root.querySelector('.profile__job');
let nameCardInput = formAddElement.querySelector('.popup__input_name_name');
let linkCardInput = formAddElement.querySelector('.popup__input_name_link');
let cardElements = root.querySelector('.elements');
let templateElement = root.querySelector('#template-elements__element').content.querySelector('.elements__element');
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
function setDataNewCard() {
  let Card = [
    {
      name: '',
      link: ''
    }
  ];
  Card.name = nameCardInput.value;
  Card.link = linkCardInput.value;
  return Card;
}
function formSubmitHandler(evt) {
    evt.preventDefault();
    setNodeTextValue();
    closePopup(editPopup);
}
function sendingCardData (evt) {
  evt.preventDefault();
  let initialCard = setDataNewCard();
  renderCards(initialCard, cardElements);
  closePopup(addPopup);
}

function createCards (input) {
  const elElement = templateElement.cloneNode(true);
  const photoElement = elElement.querySelector('.elements__photo');
  const titleElement = elElement.querySelector('.elements__title');
  const btnDelElement = elElement.querySelector('.elements__delete-button');
  const likeBtn = elElement.querySelector('.elements__like-button');
  photoElement.src = input.link;
  titleElement.textContent = input.name;
  btnDelElement.addEventListener('click', function() {
    elElement.remove();
  });
  likeBtn.addEventListener('click', function(evt) {
    const like = evt.target;
    if (like.classList.contains('elements__like-button_active')) {
      like.classList.remove('elements__like-button_active');
    }
    else {
      like.classList.add('elements__like-button_active');
    }
  });
  return elElement;
}
function renderCards (data, container) {
  container.prepend(createCards(data));
}

initialCards.forEach(function(input) {
  renderCards(input, cardElements);
});
editBtn.addEventListener('click', function () {
  setPopupInputValue();
  openPopup(editPopup);
});
addBtn.addEventListener('click', function() {
openPopup(addPopup);
})
root.addEventListener('click', closePopupClickButtton);
formEditElement.addEventListener('submit', formSubmitHandler);
formAddElement.addEventListener('submit', sendingCardData);