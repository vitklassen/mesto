import Popup from "./Popup.js";
export default class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popup = super._generate();
        this._saveButton = this._popup.querySelector(".popup__save-button");
    }
    setEventListeners() {
        this._saveButton.addEventListener("click", () => {
            this._setAction();
        });
        super.setEventListeners();
    }
    setAction(action) {
        this._setAction = action;
    }
}
