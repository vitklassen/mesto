class PopupWithImage extends Popup {
    constructor(data, popupSelector) {
        super(popupSelector);
        this._link = data.link;
        this._name = data.name;
    }
    open() {
        super._popup.querySelector('.popup__photo').src = this._link;
        super._popup.querySelector('.popup__photo').alt = this._name;
        super._popup.querySelector('.popup__title').textContent = this._name;
        super._popup.classList.add('popup_opened');
        super._popup.addEventListener('keydown', super._handleEscClose);
    }
}