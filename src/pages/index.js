//импорт требуемых компонентов
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import { settingsOptions, cardSettings } from "../constants/data.js";
import "./index.css";

//константы
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
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const profileAvatar = document.querySelector(".profile__avatar");
//экземпляр класса Api
const newApi = new Api(cardSettings);

//загрузка карточек с сервера
newApi.getAllCards()
.then((cards) => {
  newSection.render(cards);;
})

//загрузка информации о пользователе
newApi.getUserInfo()
.then((userInfoObject) => {
  profileName.textContent = userInfoObject.name;
  profileJob.textContent = userInfoObject.about;
  profileAvatar.src = userInfoObject.avatar;
})

//экземпляр класса UserInfo
const userInfo = new UserInfo(".profile__name", ".profile__job");

//экземпляр класса Section
const newSection = new Section(
  {
    renderer: (item) => {
      const initialCard = createCard(item);
      newSection.addItem(initialCard.createCard());
    },
  },
  ".elements"
);

//экземпляры класса FormValidator и валидация полей формы
const newValidityEditForm = new FormValidator(settingsOptions, formEditElement);
newValidityEditForm.enableValidation();
const newValidityAddForm = new FormValidator(settingsOptions, formAddElement);
newValidityAddForm.enableValidation();

//экземпляр класса PopupWithForm для формы попапа редактирования профиля
const popupWithEditForm = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
    newApi.setUserInfo(formData);
  },
  protectFromBadData: () => {
    return;
  },
});

//слушатели событий для попапа редактирования профиля
popupWithEditForm.setEventListeners();

//экземпляр класса PopupWithForm для формы попапа создания карточки
const popupWithAddForm = new PopupWithForm({
  popupSelector: ".popup_type_add",
  handleFormSubmit: (formData) => {
    const newCard = createCard(formData);
    newApi.addNewCard(formData);
    newSection.addItem(newCard.createCard());
    newValidityAddForm.disableSubmitButton();
  },
  protectFromBadData: () => {
    newValidityAddForm.disableSubmitButton();
  },
});

//слушатели событий для попапа создания карточки
popupWithAddForm.setEventListeners();

//экземпляр класса popupWithImage
const popupWithImage = new PopupWithImage(".popup_type_card");
popupWithImage.setEventListeners();

//слушатель клика для кнопки редактирования профиля
buttonOpenEditProfilePopup.addEventListener("click", function () {
  const currentUserInfo = userInfo.getUserInfo();
  nameInput.value = currentUserInfo.userName;
  jobInput.value= currentUserInfo.userJob;
  popupWithEditForm.open();
});

//слушатель клика для кнопки создания карточки
buttonOpenAddCardPopup.addEventListener("click", function () {
  popupWithAddForm.open();
});

//функция для создания новой карточки
function createCard(data) {
  const card = new Card(data, {
    templateSelector: "template-elements__element",
    handleCardClick: () => {
      popupWithImage.open(data);
    },
  });
  return card;
}
