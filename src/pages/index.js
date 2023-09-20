//импорт требуемых компонентов
/*import Section from "../components/Section.js";
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
const formEditElement = document.querySelector(".popup__form_type_edit");
const formAddElement = document.querySelector(".popup__form_type_add");
const formEditAvatarElement = document.querySelector(".popup__form_type_edit-avatar");
const nameInput = document.querySelector(".popup__input_name_firstname");
const jobInput = document.querySelector(".popup__input_name_job");
const buttonEditAvatar = document.querySelector(".profile__edit-avatar-button");

const userInfo = new UserInfo(
  ".profile__name",
  ".profile__job",
  ".profile__avatar"
);

const newValidityEditForm = new FormValidator(settingsOptions, formEditElement);

const newValidityAddForm = new FormValidator(settingsOptions, formAddElement);

const newValidityEditAvatarForm = new FormValidator(settingsOptions, formEditAvatarElement);

const popupWithImage = new PopupWithImage(".popup_type_card");

const api = new Api(serverSettings);

api
  .getAllData()
  .then((response) => {
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
        api.deleteCard(id)
        .catch((error) =>{
          console.log(error)
        });
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
            .catch((error) => {
              console.log(error);
            })
          })
          popupWithConfirm.setEventListener();
        },
        handleLikeClick: (id, like) => {
          if(like) {
            api.addLike(id)
            .then((cardArray) => {
              card.countNumberOfLikes(cardArray.likes);
            })
            .catch((error) => {
              console.log(error);
            })
          }
          else {
            api.deleteLike(id)
            .then((cardArray) => {
              card.countNumberOfLikes(cardArray.likes);
            })
            .catch((error) => {
              console.log(error);
            })
          }
        }
      });
      return card;
    }
    return {createCard: createCard, section: section};
  })
  .then(function (params) {
    const popupWithEditForm = new PopupWithForm({
      popupSelector: ".popup_type_edit",
      handleFormSubmit: (formData) => {
        userInfo.setUserInfo(formData);
        api.setUserInfo(formData)
        .catch((error) => {
          console.log(error);
        });
      },
      protectFromBadData: () => {
        return;
      },
    });
    const popupWithAddForm = new PopupWithForm({
      popupSelector: ".popup_type_add",
      handleFormSubmit: (formData) => {
        api.addNewCard(formData)
        .then((card) => {
          const newCard = params.createCard(card);
          params.section.addItem(newCard.createCard());
          newValidityAddForm.disableSubmitButton();
        })
        .catch((error) => {
          console.log(error);
        });
      },
      protectFromBadData: () => {
        newValidityAddForm.disableSubmitButton();
      },
    });
    const popupWithEditAvatarForm = new PopupWithForm({
      popupSelector: ".popup_type_edit-avatar",
      handleFormSubmit: (formData) => {
        api.editAvatar(formData.avatarLink)
        .then((avatar) => {
          userInfo.setUserInfoFromApi(avatar);
          newValidityEditAvatarForm.disableSubmitButton();
        })
        .catch((error) => {
          console.log(error);
        })
      },
      protectFromBadData: () => {
        newValidityEditAvatarForm.disableSubmitButton();
      },
    });
    return {popupWithEditForm: popupWithEditForm, popupWithAddForm: popupWithAddForm, popupWithEditAvatarForm: popupWithEditAvatarForm};
  })
  .then((paramsPartTwo) => {
    paramsPartTwo.popupWithEditForm.setEventListeners();
    paramsPartTwo.popupWithAddForm.setEventListeners();
    paramsPartTwo.popupWithEditAvatarForm.setEventListeners();
    popupWithImage.setEventListeners();
    newValidityAddForm.enableValidation();
    newValidityEditForm.enableValidation();
    newValidityEditAvatarForm.enableValidation();

    buttonOpenEditProfilePopup.addEventListener("click", function () {
      const currentUserInfo = userInfo.getUserInfo();
      nameInput.value = currentUserInfo.userName;
      jobInput.value = currentUserInfo.userJob;
      paramsPartTwo.popupWithEditForm.open();
    });

    buttonOpenAddCardPopup.addEventListener("click", function () {
      paramsPartTwo.popupWithAddForm.open();
    });

    buttonEditAvatar.addEventListener("click", function () {
      paramsPartTwo.popupWithEditAvatarForm.open();
    })
  })*/

// НОВАЯ ВЕРСИЯ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
const formEditElement = document.querySelector(".popup__form_type_edit");
const formAddElement = document.querySelector(".popup__form_type_add");
const formEditAvatarElement = document.querySelector(
  ".popup__form_type_edit-avatar"
);
const nameInput = document.querySelector(".popup__input_name_firstname");
const jobInput = document.querySelector(".popup__input_name_job");
const buttonEditAvatar = document.querySelector(".profile__edit-avatar-button");
let profileId = "";

const api = new Api(serverSettings);

api
  .getAllData()
  .then((response) => {
    const [responseFromFirstPromise, responseFromSecondPromise] = response;
    profileId = responseFromFirstPromise._id;
    userInfo.setUserInfoFromApi(responseFromFirstPromise);
    section.render(responseFromSecondPromise);
  })
  .catch((error) => {
    console.log(error);
  });

const userInfo = new UserInfo(
  ".profile__name",
  ".profile__job",
  ".profile__avatar"
);

const newValidityEditForm = new FormValidator(settingsOptions, formEditElement);

const newValidityAddForm = new FormValidator(settingsOptions, formAddElement);

const newValidityEditAvatarForm = new FormValidator(
  settingsOptions,
  formEditAvatarElement
);

const popupWithImage = new PopupWithImage(".popup_type_card");

const popupWithConfirm = new PopupWithConfirm(".popup_type_delete-card");

const popupWithEditForm = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
    popupWithEditForm.isLoading(true, 'edit');
    api.setUserInfo(formData)
    .then(() => {
      popupWithEditForm.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      popupWithEditForm.isLoading(false, 'edit');
    });
  },
  protectFromBadData: () => {
    return;
  },
});

const popupWithAddForm = new PopupWithForm({
  popupSelector: ".popup_type_add",
  handleFormSubmit: (formData) => {
    popupWithAddForm.isLoading(true, 'add');
    api
      .addNewCard(formData)
      .then((card) => {
        const newCard = createCard(card);
        section.addItem(newCard.createCard());
        popupWithAddForm.close();
        newValidityAddForm.disableSubmitButton();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupWithAddForm.isLoading(false, 'add');
      });
    
  },
  protectFromBadData: () => {
    newValidityAddForm.disableSubmitButton();
  },
});

const popupWithEditAvatarForm = new PopupWithForm({
  popupSelector: ".popup_type_edit-avatar",
  handleFormSubmit: (formData) => {
    popupWithEditAvatarForm.isLoading(true, 'edit');
    api
      .editAvatar(formData.avatarLink)
      .then((avatar) => {
        userInfo.setUserInfoFromApi(avatar);
        popupWithEditAvatarForm.close();
        newValidityEditAvatarForm.disableSubmitButton();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupWithEditAvatarForm.isLoading(false, 'edit');
      });
  },
  protectFromBadData: () => {
    newValidityEditAvatarForm.disableSubmitButton();
  },
});

const section = new Section(
  {
    renderer: (item) => {
      const initialCard = createCard(item);
      section.addItem(initialCard.createCard());
    },
  },
  ".elements"
);

function createCard(data) {
  const card = new Card(data, profileId, {
    templateSelector: "template-elements__element",
    handleCardClick: () => {
      popupWithImage.open(data);
    },
    handleDeleteIconClick: (id) => {
      popupWithConfirm.open();
      popupWithConfirm.setAction(() => {
        api
          .deleteCard(id)
          .then(() => {
            card.removeCard();
            popupWithConfirm.close();
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
    handleLikeClick: (id, like) => {
      if (like) {
        api
          .addLike(id)
          .then((cardArray) => {
            card.countNumberOfLikes(cardArray.likes);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        api
          .deleteLike(id)
          .then((cardArray) => {
            card.countNumberOfLikes(cardArray.likes);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  });
  return card;
}

popupWithImage.setEventListeners();
popupWithConfirm.setEventListeners();
popupWithEditForm.setEventListeners();
popupWithAddForm.setEventListeners();
popupWithEditAvatarForm.setEventListeners();
newValidityAddForm.enableValidation();
newValidityEditForm.enableValidation();
newValidityEditAvatarForm.enableValidation();

buttonOpenEditProfilePopup.addEventListener("click", function () {
  const currentUserInfo = userInfo.getUserInfo();
  nameInput.value = currentUserInfo.userName;
  jobInput.value = currentUserInfo.userJob;
  popupWithEditForm.open();
});

buttonOpenAddCardPopup.addEventListener("click", function () {
  popupWithAddForm.open();
});

buttonEditAvatar.addEventListener("click", function () {
  popupWithEditAvatarForm.open();
});
