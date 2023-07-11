const root = document.querySelector('.page');
const editBtn = root.querySelector('.profile__edit-button');
const addBtn = root.querySelector('.profile__add-button');
const editPopup = root.querySelector('.popup_type_edit');
const formEditElement = editPopup.querySelector('.popup__form');
const addPopup = root.querySelector('.popup_type_add');
const formAddElement = addPopup.querySelector('.popup__form');
const nameInput = formEditElement.querySelector('.popup__input_name_firstname');
const jobInput = formEditElement.querySelector('.popup__input_name_user-info');
const nameUser = root.querySelector('.profile__name');
const jobUser = root.querySelector('.profile__job');
const nameCardInput = formAddElement.querySelector('.popup__input_name_name');
const linkCardInput = formAddElement.querySelector('.popup__input_name_link');
const cardElements = root.querySelector('.elements');
const popupCard = root.querySelector('.popup-card');
const popupCardPhoto = popupCard.querySelector('.popup-card__photo');
const popupCardTitle = popupCard.querySelector('.popup-card__title');
const templateElement = root.querySelector('#template-elements__element').content.querySelector('.elements__element');
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
    if (modal.classList.contains('popup')) {
      modal.classList.add('popup_opened');
    }
    else {
      modal.classList.add('popup-card_opened');
    }
}
function closePopup(modal) {
  if (modal.classList.contains('popup')) {
    modal.classList.remove('popup_opened');
  }
  else {
    modal.classList.remove('popup-card_opened');
  }
}
function closePopupClickButtton(evt) {
    const closeBtn = evt.target;
    if (closeBtn.classList.contains('popup__close-button')) {
        const currentPopup = closeBtn.closest('.popup');
        closePopup(currentPopup);
    }
    else {
      const currentPopup = closeBtn.closest('.popup-card');
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
  const Card = [
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
  const initialCard = setDataNewCard();
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
  photoElement.alt = 'Красивое место';
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
  
  photoElement.addEventListener('click', function() {
    popupCardPhoto.src = input.link;
    popupCardPhoto.alt = 'Красивое место';
    popupCardTitle.textContent = input.name;
    openPopup(popupCard);
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