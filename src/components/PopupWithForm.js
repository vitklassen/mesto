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
  isLoading(param, typePopup) {
    if(param) {
      switch(typePopup){
        case 'add':
          this._saveButton.textContent = "Создание...";
          break;
        case 'edit':
          this._saveButton.textContent = "Сохранение...";
          break;
      }
    }
    else {
      switch(typePopup){
        case 'add':
          this._saveButton.textContent = "Создать";
          break;
        case 'edit':
          this._saveButton.textContent = "Сохранить";
          break;
      }
    }
  }
  setEventListeners() {
    this._form.addEventListener("submit", () => {
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }
  close() {
    super.close();
    this._form.reset();
    this._protectFromBadData();
  }
}