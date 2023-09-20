import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = super._generate();
    this._photoElement = this._popup.querySelector(".popup__photo");
  }

  open(data) {
    this._photoElement.src = data.link;
    this._photoElement.alt = data.name;
    this._popup.querySelector(".popup__title").textContent = data.name;
    super.open();
  }
}
