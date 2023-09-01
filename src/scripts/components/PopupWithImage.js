import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = super._generate();
  }

  open(data) {
    this._popup.querySelector(".popup__photo").src = data.link;
    this._popup.querySelector(".popup__photo").alt = data.name;
    this._popup.querySelector(".popup__title").textContent = data.name;
    super.open();
  }
}
