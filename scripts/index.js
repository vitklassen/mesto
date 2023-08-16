const root = document.querySelector(".page");
const buttonOpenEditProfilePopup = root.querySelector(".profile__edit-button");
const buttonOpenAddCardPopup = root.querySelector(".profile__add-button");
const popups = Array.from(root.querySelectorAll(".popup"));
const popupEditProfile = root.querySelector(".popup_type_edit");
const formEditElement = popupEditProfile.querySelector(".popup__form");
const popupAddCard = root.querySelector(".popup_type_add");
const formAddElement = popupAddCard.querySelector(".popup__form");
const nameInput = formEditElement.querySelector(".popup__input_name_firstname");
const jobInput = formEditElement.querySelector(".popup__input_name_user-info");
const nameUser = root.querySelector(".profile__name");
const jobUser = root.querySelector(".profile__job");
const nameCardInput = formAddElement.querySelector(".popup__input_name_name");
const linkCardInput = formAddElement.querySelector(".popup__input_name_link");
const cardElements = root.querySelector(".elements");

import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards, settingsOptions } from "./data.js";
import { openPopup, closePopup } from "./utils.js";

const newValidityEditForm = new FormValidator(settingsOptions, formEditElement);
newValidityEditForm.enableValidation();
const newValidityAddForm = new FormValidator(settingsOptions, formAddElement);
newValidityAddForm.enableValidation();

function handleCloseByClick(evt) {
  if (
    evt.target === evt.currentTarget ||
    evt.target.classList.contains("popup__close-button")
  ) {
    closePopup(evt.currentTarget);
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
  const cardData = [
    {
      name: "",
      link: "",
    },
  ];
  cardData.name = nameCardInput.value;
  cardData.link = linkCardInput.value;
  return cardData;
}
function submitEditProfileForm(evt) {
  evt.preventDefault();
  setNodeTextValue();
  closePopup(popupEditProfile);
}
function submitAddCardForm(evt) {
  evt.preventDefault();
  const initialCard = new Card(setDataNewCard(), "#template-elements__element");
  renderCards(initialCard.createCard(), cardElements);
  closePopup(popupAddCard);
  newValidityAddForm.disableSubmitButton();
  evt.target.reset();
}
function renderCards(item, container) {
  container.prepend(item);
}
function createObjectCard(item, templateSelector) {
  const newCard = new Card(item, templateSelector);
  return newCard.createCard();
}
initialCards.forEach(function (item) {
  renderCards(
    createObjectCard(item, "#template-elements__element"),
    cardElements
  );
});
buttonOpenEditProfilePopup.addEventListener("click", function () {
  setPopupInputValue();
  openPopup(popupEditProfile);
});
buttonOpenAddCardPopup.addEventListener("click", function () {
  openPopup(popupAddCard);
});
popups.forEach(function (popup) {
  popup.addEventListener("click", handleCloseByClick);
});

formEditElement.addEventListener("submit", submitEditProfileForm);
formAddElement.addEventListener("submit", submitAddCardForm);
