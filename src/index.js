import Section from "./scripts/components/Section.js";
import Card from "./scripts/components/Card.js";
import FormValidator from "./scripts/components/FormValidator.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import UserInfo from "./scripts/components/UserInfo.js";
import { initialCards, settingsOptions } from "./scripts/utils/data.js";

const buttonOpenEditProfilePopup = document.querySelector(
  ".profile__edit-button"
);
const buttonOpenAddCardPopup = document.querySelector(".profile__add-button");
const popupEditProfile = document.querySelector(".popup_type_edit");
const formEditElement = popupEditProfile.querySelector(".popup__form");
const popupAddCard = document.querySelector(".popup_type_add");
const formAddElement = popupAddCard.querySelector(".popup__form");

const initialuserInfo = new UserInfo({}, ".profile__name", ".profile__job");

const newValidityEditForm = new FormValidator(settingsOptions, formEditElement);
newValidityEditForm.enableValidation();
const newValidityAddForm = new FormValidator(settingsOptions, formAddElement);
newValidityAddForm.enableValidation();

const popupWithEditForm = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  handleFormSubmit: (formData) => {
    const userInfo = new UserInfo(
      { firstname: formData.firstname, job: formData.job },
      ".profile__name",
      ".profile__job"
    );
    userInfo.setUserInfo();
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
    const newSection = renderSection();
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
  initialuserInfo.getUserInfo();
  newValidityEditForm.enableValidation();
  popupWithEditForm.open();
});

buttonOpenAddCardPopup.addEventListener("click", function () {
  popupWithAddForm.open();
});

function renderSection() {
  const newSection = new Section({ items: [] }, ".elements");
  return newSection;
}

function createCard(data) {
  const card = new Card(data, {
    templateSelector: "template-elements__element",
    handleCardClick: () => {
      popupWithImage.open(data);
    },
  });
  return card;
}

function drawInitialCards() {
  const cardList = new Section(
    {
      items: initialCards,
      renderer: (item) => {
        const initialCard = createCard(item);
        cardList.addItem(initialCard.createCard());
      },
    },
    ".elements"
  );
  cardList.render();
}

drawInitialCards();
