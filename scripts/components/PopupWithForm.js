import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit, blockData}) {
    super(popupSelector);
    this._popup = super._generate();
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._handleFormSubmit = handleFormSubmit;
    this._blockData = blockData;
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  }
  setEventListeners() {
    this._form.addEventListener("submit", () => {
      
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }
  close() {
    super.close();
    this._form.reset();
    this._blockData();
  }
}