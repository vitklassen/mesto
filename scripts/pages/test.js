import Section from "../components/Section.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards, settingsOptions } from "../utils/data.js";

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



function renderSection() {
  const newSection = new Section({items: []}, ".elements");
  return newSection;
}

const newValidityEditForm = new FormValidator(settingsOptions, formEditElement);
newValidityEditForm.enableValidation();
const newValidityAddForm = new FormValidator(settingsOptions, formAddElement);
newValidityAddForm.enableValidation();

const popupWithEditForm = new PopupWithForm({popupSelector: ".popup_type_edit", handleFormSubmit: (formData) => {
  const userInfo = new UserInfo({name: formData.firstname, job: formData.job});
  userInfo.getUserInfo();
  userInfo.setUserInfo();
}})

const popupWithAddForm = new PopupWithForm({popupSelector: ".popup_type_add", 
handleFormSubmit: (formData) => {
  const newCard = createCard(formData);
  const newSection = renderSection();
  newSection.addItem(newCard.createCard());
  newValidityAddForm.disableSubmitButton();
  popupWithAddForm.close();
}, blockData: () => {
  newValidityAddForm.disableSubmitButton();
}
});

buttonOpenEditProfilePopup.addEventListener('click', function() {
  popupWithEditForm.setEventListeners();
  popupWithEditForm.open();
});
buttonOpenAddCardPopup.addEventListener('click', function() {
  popupWithAddForm.open();
  popupWithAddForm.setEventListeners();
 
});

function createCard(data) {
  const card = new Card(data, "template-elements__element");
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