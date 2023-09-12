import Popup from "./Popup.js";
export default class PopupWithConfirm extends Popup {
    constructor({popupSelector, handleDeleteCard}) {
        super(popupSelector);
        this._popup = super._generate();
        this._handleDeleteCard = handleDeleteCard;
        this._saveButton = this._popup.querySelector(".popup__save-button");
    }
    setEventListener() {
        this._saveButton.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleDeleteCard(this._idCard);
            super.close();
        });
        super.setEventListeners();
    }
    open(id) {
        this._idCard = id;
        super.open();
    }
}
