//импорт требуемых компонентов
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import { settingsOptions, serverSettings } from "../constants/data.js";
import "./index.css";
import PopupWithConfirm from "../components/PopupWithConfirm.js";

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

const userInfo = new UserInfo(
  ".profile__name",
  ".profile__job",
  ".profile__avatar"
);

const newValidityEditForm = new FormValidator(settingsOptions, formEditElement);

const newValidityAddForm = new FormValidator(settingsOptions, formAddElement);

const popupWithImage = new PopupWithImage(".popup_type_card");

const api = new Api(serverSettings);

api
  .getAllNeededData()
  .then((response) => {
    popupWithImage.setEventListeners();
    const [responseFromFirstPromise, responseFromSecondPromise] = response;
    const profileId = responseFromFirstPromise._id;
    userInfo.setUserInfoFromApi(responseFromFirstPromise);
    const section = new Section(
      {
        renderer: (item) => {
          const initialCard = createCard(item);
          section.addItem(initialCard.createCard());
        },
      },
      ".elements"
    );
    section.render(responseFromSecondPromise);
    const popupWithConfirm = new PopupWithConfirm({
      popupSelector: ".popup_type_delete-card",
      handleDeleteCard: (id) => {
        api.deleteCard(id);
      },
    });
    const popupWithEditForm = new PopupWithForm({
      popupSelector: ".popup_type_edit",
      handleFormSubmit: (formData) => {
        userInfo.setUserInfo(formData);
        api.setUserInfo(formData);
      },
      protectFromBadData: () => {
        return;
      },
    });
    const popupWithAddForm = new PopupWithForm({
      popupSelector: ".popup_type_add",
      handleFormSubmit: (formData) => {
        api.addNewCard(formData).then((card) => {
          const newCard = createCard(card);
          section.addItem(newCard.createCard());
          newValidityAddForm.disableSubmitButton();
        });
      },
      protectFromBadData: () => {
        newValidityAddForm.disableSubmitButton();
      },
    });
    function createCard(data) {
      const card = new Card(data, profileId, {
        templateSelector: "template-elements__element",
        handleCardClick: () => {
          popupWithImage.open(data);
        },
        handleDeleteIconClick: (id) => {
          popupWithConfirm.open();
          popupWithConfirm.setAction(() => {
            api.deleteCard(id)
            .then(() => {
              card.removeCard();
            })
            .catch(() => {
              console.log('Что-то не так...');
            })
          })
          popupWithConfirm.setEventListener();
        },
        handleLikeClick: (id, like) => {
          if(like) {
            api.addLike(id)
            .then((likeArray) => {
              card.countNumberOfLikes(likeArray.likes);
            })
          }
          else {
            api.deleteLike(id)
            .then((likeArray) => {
              card.countNumberOfLikes(likeArray.likes);
            })
          }

        }
      });
      return card;
    }
    return {popupAddForm: popupWithAddForm, popupEditForm: popupWithEditForm};
  })
  .then(function (params) {
    params.popupAddForm.setEventListeners();
    params.popupEditForm.setEventListeners();
    newValidityAddForm.enableValidation();
    newValidityEditForm.enableValidation();
    buttonOpenEditProfilePopup.addEventListener("click", function () {
      const currentUserInfo = userInfo.getUserInfo();
      nameInput.value = currentUserInfo.userName;
      jobInput.value = currentUserInfo.userJob;
      params.popupEditForm.open();
    });

    buttonOpenAddCardPopup.addEventListener("click", function () {
      params.popupAddForm.open();
    });
  });
