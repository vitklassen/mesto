let root = document.querySelector('.page');
let editBtn = root.querySelector('.profile__edit-button');
let popup = root.querySelector('.popup');
let like = root.querySelector('.elements');
let formElement = popup.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_name_firstname');
let jobInput = formElement.querySelector('.popup__input_name_user-info');
let nameUser = root.querySelector('.profile__name');
let jobUser = root.querySelector('.profile__job');

function openPopup(modal) {
    modal.classList.add('popup_opened');
}
function closePopup(modal) {
    modal.classList.remove('popup_opened');
}
function closePopupClickButtton(evt) {
    const closeBtn = evt.target;
    if (closeBtn.classList.contains('popup__close-button')) {
        const currentPopup = closeBtn.closest('.popup');
        closePopup(currentPopup);
    }
}
function addLike(evt) {
    const likeButton = evt.target;
    if (likeButton.classList.contains('elements__like-button')) {
        likeButton.classList.add('elements__like-button_active');
    }
}
function setPopupInputValue() {
    nameInput.value = nameUser.textContent;
    jobInput.value = jobUser.textContent;
}
function setNodeTextValue() {
    nameUser.textContent = nameInput.value;
    jobUser.textContent = jobInput.value;
}
function formSubmitHandler(evt) {
    evt.preventDefault();
    setNodeTextValue();
    closePopup(popup);
}
editBtn.addEventListener('click', function () {
    setPopupInputValue();
    openPopup(popup);
});
root.addEventListener('click', closePopupClickButtton);
like.addEventListener('click', addLike);
formElement.addEventListener('submit', formSubmitHandler);