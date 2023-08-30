export default class Popup {
    constructor(popupSelector) {
        this._selector = popupSelector;
    }
    open() {
        this._popup.classList.add('popup_opened');
        this._handleEscClose();
    }
    close() {
        this._popup.classList.remove('popup_opened');
        //this._popup.removeEventListener('keydown',  this._handleEscClose);
        this._removeEscClose();
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
    _handleEscClose() {
        this._popup.addEventListener('keydown', (evt) => {
            if (evt.key === "Escape") {
                this.close();
            }
        });
    }
    _removeEscClose() {
        this._popup.removeEventListener('keydown', (evt) => {
            if (evt.key === "Escape") {
                this.close();
            }
        });
    }
    _generate() {
        this._popup = document.querySelector(this._selector);
        return this._popup;
    }
}