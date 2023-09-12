export default class Card {
  constructor(data, userId, { templateSelector, handleCardClick, handleOpenPopup }) {
    this._name = data.name;
    this._link = data.link;
    this._likeCount = data.likes;
    this._id = data._id;
    this._ownerIdCard = data.owner._id;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleOpenPopup = handleOpenPopup;
  }
  _getTemplate() {
    const templateElement = document
      .getElementById(this._templateSelector)
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
    this._cardElement.querySelector(".elements__like-count").textContent = this._likeCount.length;
    return this._cardElement;
  }
  _handleClickBtnDelete() {
    this._handleOpenPopup(this._id);
  }
  _setLike() {
    this._cardElement
      .querySelector(".elements__like-button")
      .classList.toggle("elements__like-button_active");
  }
  _setEventListeners() {
    if(this._checkOwnerCard()) {
      this._cardElement
      .querySelector(".elements__delete-button")
      .addEventListener("click", this._handleClickBtnDelete.bind(this));
    }
    else {
      this._cardElement.removeChild(this._cardElement
        .querySelector(".elements__delete-button"));
    }
    this._cardElement
      .querySelector(".elements__like-button")
      .addEventListener("click", this._setLike.bind(this));
    this._cardElement
      .querySelector(".elements__photo")
      .addEventListener("click", this._handleCardClick.bind(this));
  }
  _checkOwnerCard() {
    if(this._userId === this._ownerIdCard) {
      return true;
    }
    else {
      return false;
    }
  }
  removeCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
}
