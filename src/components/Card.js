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
    this._likeButtonElement = this._cardElement
    .querySelector(".elements__like-button");
    this._deleteButtonElement = this._cardElement
    .querySelector(".elements__delete-button");
    this._photoElement = this._cardElement.querySelector(".elements__photo");
    this._photoElement.src = this._link;
    this._photoElement.alt = this._name;
    this._cardElement.querySelector(".elements__title").textContent =
      this._name;
      this.countNumberOfLikes(this._likeCount);
      this._setEventListeners();
      this._checkLikeButton();
    return this._cardElement;
  }
  _handleClickBtnDelete() {
    this._handleDeleteIconClick(this._id);
  }
  _setLike() {
    if(this._likeButtonElement.classList.contains('elements__like-button_active')) {
      this._likeButtonElement.classList.remove('elements__like-button_active');
        this._handleLikeClick(this._id, false);
      }
      else {
        this._likeButtonElement.classList.add('elements__like-button_active');
        this._handleLikeClick(this._id, true);
      }
  }
  _setEventListeners() {
    if(this._checkOwnerCard()) {
      this._deleteButtonElement
      .addEventListener("click", this._handleClickBtnDelete.bind(this));
    }
    else {
      this._cardElement.removeChild(this._deleteButtonElement);
    }
    this._likeButtonElement
      .addEventListener("click", this._setLike.bind(this));
      this._photoElement
      .addEventListener("click", this._handleCardClick.bind(this));
  }
  _checkOwnerCard() {
    return (this._userId === this._ownerIdCard)
  }
  _checkLikeButton() {
    this._likeCount.forEach((like) => {
      if(like._id === this._userId) {
        this._likeButtonElement.classList.add('elements__like-button_active');
      }
    })
  }

  countNumberOfLikes(likes) {
    this._cardElement.querySelector(".elements__like-count").textContent = likes.length;
  }
  removeCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
}
