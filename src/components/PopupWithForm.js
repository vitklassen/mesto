import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit, protectFromBadData}) {
    super(popupSelector);
    this._popup = super._generate();
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._saveButton = this._popup.querySelector(".popup__save-button");
    this._handleFormSubmit = handleFormSubmit;
    this._protectFromBadData = protectFromBadData;
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  }
  _isLoading(param) {
    if(param) {
      this._saveButton.textContent = "Сохранение...";
    }
    else {
      this._saveButton.textContent = "Сохранить";
    }
  }
  setEventListeners() {
    this._form.addEventListener("submit", () => {
      this._isLoading(true);
      this._handleFormSubmit(this._getInputValues());
      this._isLoading(false);
    });
    super.setEventListeners();
  }
  close() {
    super.close();
    this._form.reset();
    this._protectFromBadData();
  }
}