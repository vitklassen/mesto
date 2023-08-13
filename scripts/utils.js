import { settingsOptions } from "./data.js";
export function openPopup(modal) {
  modal.classList.add("popup_opened");
  document.querySelector(".page").addEventListener("keydown", closePopupClickEscape);
}
export function closePopup(modal) {
  modal.classList.remove("popup_opened");
  document.querySelector(".page").removeEventListener("keydown", closePopupClickEscape);
}
export function closePopupClickEscape(evt) {
  if (evt.key === "Escape") {
    const popupElement = document.querySelector(".popup_opened");
    closePopup(popupElement);
  }
}
export function disableSubmitButton(buttonElement) {
  buttonElement.classList.add(settingsOptions.inactiveButtonClass);
  buttonElement.setAttribute("disabled", "");
}
