export default class Popup {
    constructor(popupSelector) {
        this._selector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open() {
        this._popup.classList.add('popup_opened');
        this._popup.addEventListener('keydown',  this._handleEscClose);
    }
    close() {
        this._popup.classList.remove('popup_opened');
        this._popup.removeEventListener('keydown',  this._handleEscClose);
        this._form = this._popup.querySelector(".popup__form");
        //this._form.reset();
    }
    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            if (
                evt.target === evt.currentTarget ||
                evt.target.classList.contains('popup__close-button')
              ) {
                this.close();
              }
        });
    }
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }
    _generate() {
        this._popup = document.querySelector(this._selector);
        return this._popup;
    }
}