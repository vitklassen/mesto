let root = document.querySelector('.root');
let editBtn = root.querySelector('.profile__edit-button');
let popup = root.querySelector('.popup');
let like = root.querySelector('.like-root');
let formElement = popup.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_name_firstname');
let jobInput = formElement.querySelector('.popup__input_name_user-info');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}
function closePopup(evt) {
    const closeBtn = evt.target;
    if (closeBtn.classList.contains('popup__close-button')) {
        closeBtn.closest('.popup').classList.remove('popup_opened');
    }
}
function addLike(evt) {
    const likeButton = evt.target;
    if (likeButton.classList.contains('elements__like-button')) {
        likeButton.classList.add('elements__like-button_active');
    }
}
function setPopupInputValue() {

}

editBtn.addEventListener('click', function () {
    openPopup(popup);
});
root.addEventListener('click', closePopup);
like.addEventListener('click', addLike);