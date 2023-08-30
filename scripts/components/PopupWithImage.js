import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
    constructor(data, popupSelector) {
        super(popupSelector);
        this._popup = super._generate();
        this._link = data.link;
        this._name = data.name;
    }

    open() {
        this._popup.querySelector('.popup__photo').src = this._link;
        this._popup.querySelector('.popup__photo').alt = this._name;
        this._popup.querySelector('.popup__title').textContent = this._name;
        super.open();
    }
}