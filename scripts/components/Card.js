import { openPopup } from "../utils/utils.js";
export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }
  _getTemplate() {
    const templateElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__element")
      .cloneNode(true);

    return templateElement;
  }
  createCard() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    this._cardElement.querySelector(".elements__photo").src = this._link;
    this._cardElement.querySelector(".elements__photo").alt = this._name;
    this._cardElement.querySelector(".elements__title").textContent =
      this._name;
    return this._cardElement;
  }
  _setEventListenersForPhotoElement() {
    const popupCard = document.querySelector(".popup_type_card");
    const popupCardPhoto = popupCard.querySelector(".popup__photo");
    const popupCardTitle = popupCard.querySelector(".popup__title");
    popupCardPhoto.src = this._link;
    popupCardPhoto.alt = this._name;
    popupCardTitle.textContent = this._name;
    openPopup(popupCard);
  }
  _deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  _setLike() {
    this._cardElement
      .querySelector(".elements__like-button")
      .classList.toggle("elements__like-button_active");
  }
  _setEventListeners() {
    this._cardElement
      .querySelector(".elements__delete-button")
      .addEventListener("click", this._deleteCard.bind(this));
    this._cardElement
      .querySelector(".elements__like-button")
      .addEventListener("click", this._setLike.bind(this));
    this._cardElement
      .querySelector(".elements__photo")
      .addEventListener("click", this._setEventListenersForPhotoElement.bind(this));
  }
}
