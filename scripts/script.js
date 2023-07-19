const root = document.querySelector(".page");
const buttonOpenEditProfilePopup = root.querySelector(".profile__edit-button");
const buttonOpenAddCardPopup = root.querySelector(".profile__add-button");
const popups = Array.from(root.querySelectorAll(".popup"));
const popupEditProfile = root.querySelector(".popup_type_edit");
const formEditElement = popupEditProfile.querySelector(".popup__form");
const popupAddCard = root.querySelector(".popup_type_add");
const formAddElement = popupAddCard.querySelector(".popup__form");
const nameInput = formEditElement.querySelector(".popup__input_name_firstname");
const jobInput = formEditElement.querySelector(".popup__input_name_user-info");
const nameUser = root.querySelector(".profile__name");
const jobUser = root.querySelector(".profile__job");
const nameCardInput = formAddElement.querySelector(".popup__input_name_name");
const linkCardInput = formAddElement.querySelector(".popup__input_name_link");
const cardElements = root.querySelector(".elements");
const popupCard = root.querySelector(".popup_type_card");
const popupCardPhoto = popupCard.querySelector(".popup__photo");
const popupCardTitle = popupCard.querySelector(".popup__title");
const buttonSave = popupAddCard.querySelector(".popup__save-button");
const templateElement = root
  .querySelector("#template-elements__element")
  .content.querySelector(".elements__element");

function openPopup(modal) {
  modal.classList.add("popup_opened");
  root.addEventListener("keydown", closePopupClickEscape);
}
function closePopup(modal) {
  modal.classList.remove("popup_opened");
  root.removeEventListener("keydown", closePopupClickEscape);
}
function closePopupClickEscape(evt) {
  if (evt.key === "Escape") {
    const popupElement = root.querySelector(".popup_opened");
    closePopup(popupElement);
  }
}
function handleCloseByClick(evt) {
  if (
    evt.target === evt.currentTarget ||
    evt.target.classList.contains("popup__close-button")
  ) {
    closePopup(evt.currentTarget);
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
function setDataNewCard() {
  const cardData = [
    {
      name: "",
      link: "",
    },
  ];
  cardData.name = nameCardInput.value;
  cardData.link = linkCardInput.value;
  return cardData;
}
function submitEditProfileForm(evt) {
  evt.preventDefault();
  setNodeTextValue();
  closePopup(popupEditProfile);
}
function submitAddCardForm(evt) {
  evt.preventDefault();
  const initialCard = setDataNewCard();
  renderCards(initialCard, cardElements);
  closePopup(popupAddCard);
  disableSubmitButton(buttonSave);
  evt.target.reset();
}
function createCards(input) {
  const elElement = templateElement.cloneNode(true);
  const photoElement = elElement.querySelector(".elements__photo");
  const titleElement = elElement.querySelector(".elements__title");
  const btnDelElement = elElement.querySelector(".elements__delete-button");
  const likeBtn = elElement.querySelector(".elements__like-button");
  photoElement.src = input.link;
  photoElement.alt = input.name;
  titleElement.textContent = input.name;
  btnDelElement.addEventListener("click", function () {
    elElement.remove();
  });

  likeBtn.addEventListener("click", function () {
    likeBtn.classList.toggle("elements__like-button_active");
  });

  photoElement.addEventListener("click", function () {
    popupCardPhoto.src = input.link;
    popupCardPhoto.alt = input.name;
    popupCardTitle.textContent = input.name;
    openPopup(popupCard);
  });
  return elElement;
}
function renderCards(data, container) {
  container.prepend(createCards(data));
}

initialCards.forEach(function (input) {
  renderCards(input, cardElements);
});
buttonOpenEditProfilePopup.addEventListener("click", function () {
  setPopupInputValue();
  openPopup(popupEditProfile);
});
buttonOpenAddCardPopup.addEventListener("click", function () {
  openPopup(popupAddCard);
});
popups.forEach(function (popup) {
  popup.addEventListener("click", handleCloseByClick);
});
formEditElement.addEventListener("submit", submitEditProfileForm);
formAddElement.addEventListener("submit", submitAddCardForm);
