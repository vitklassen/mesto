import Section from "../components/Section.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards, settingsOptions } from "../constants/data.js";
import "./index.css";

const buttonOpenEditProfilePopup = document.querySelector(
  ".profile__edit-button"
);
const buttonOpenAddCardPopup = document.querySelector(".profile__add-button");
const popupEditProfile = document.querySelector(".popup_type_edit");
const formEditElement = popupEditProfile.querySelector(".popup__form");
const popupAddCard = document.querySelector(".popup_type_add");
const formAddElement = popupAddCard.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_name_firstname");
const jobInput = document.querySelector(".popup__input_name_job");

const userInfo = new UserInfo(".profile__name", ".profile__job");

const newSection = new Section(
  {
    renderer: (item) => {
      const initialCard = createCard(item);
      newSection.addItem(initialCard.createCard());
    },
  },
  ".elements"
);

const newValidityEditForm = new FormValidator(settingsOptions, formEditElement);
newValidityEditForm.enableValidation();
const newValidityAddForm = new FormValidator(settingsOptions, formAddElement);
newValidityAddForm.enableValidation();

const popupWithEditForm = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
  },
  protectFromBadData: () => {
    return;
  },
});

popupWithEditForm.setEventListeners();

const popupWithAddForm = new PopupWithForm({
  popupSelector: ".popup_type_add",
  handleFormSubmit: (formData) => {
    const newCard = createCard(formData);
    newSection.addItem(newCard.createCard());
    newValidityAddForm.disableSubmitButton();
  },
  protectFromBadData: () => {
    newValidityAddForm.disableSubmitButton();
  },
});
popupWithAddForm.setEventListeners();

const popupWithImage = new PopupWithImage(".popup_type_card");
popupWithImage.setEventListeners();

buttonOpenEditProfilePopup.addEventListener("click", function () {
  const currentUserInfo = userInfo.getUserInfo();
  nameInput.value = currentUserInfo.userName;
  jobInput.value= currentUserInfo.userJob;
  popupWithEditForm.open();
});

buttonOpenAddCardPopup.addEventListener("click", function () {
  popupWithAddForm.open();
});

function createCard(data) {
  const card = new Card(data, {
    templateSelector: "template-elements__element",
    handleCardClick: () => {
      popupWithImage.open(data);
    },
  });
  return card;
}

newSection.render(initialCards);
