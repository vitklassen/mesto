export default class Card {
  constructor(data, userId, { templateSelector, handleCardClick, handleDeleteIconClick , handleLikeClick}) {
    this._name = data.name;
    this._link = data.link;
    this._likeCount = data.likes;
    this._id = data._id;
    this._ownerIdCard = data.owner._id;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._handleLikeClick = handleLikeClick;
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
      this.countNumberOfLikes(this._likeCount);
    return this._cardElement;
  }
  _handleClickBtnDelete() {
    this._handleDeleteIconClick(this._id);
  }
  _setLike() {
    if(this._cardElement
      .querySelector(".elements__like-button").classList.contains('elements__like-button_active')) {
        this._cardElement
        .querySelector(".elements__like-button").classList.remove('elements__like-button_active');
        this._handleLikeClick(this._id, false);
      }
      else {
        this._cardElement
        .querySelector(".elements__like-button").classList.add('elements__like-button_active');
        this._handleLikeClick(this._id, true);
      }
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
    return (this._userId === this._ownerIdCard)
  }

  countNumberOfLikes(likes) {
    this._cardElement.querySelector(".elements__like-count").textContent = likes.length;
  }
  removeCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
}
