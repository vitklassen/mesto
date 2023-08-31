export default class Card {
  constructor(data, { templateSelector, handleCardClick }) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    return this._cardElement;
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
      .addEventListener("click", this._handleCardClick.bind(this));
  }
}
