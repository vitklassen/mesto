const settingsOptions = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

function enableValidation(settingsOptions) {
    const formList = Array.from(document.querySelectorAll(settingsOptions.formSelector));
    formList.forEach(function(formElement) {
        setEventListeners(formElement);
    });
}

function setEventListeners(formElement) {
    formElement.addEventListener('submit', function(evt) {
        evt.preventDefault();
    });
    const inputList = Array.from(formElement.querySelectorAll(settingsOptions.inputSelector));
    const buttonElement = formElement.querySelector(settingsOptions.submitButtonSelector);
    console.log(buttonElement);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach(function(inputElement) {
        inputElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
}

function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add(settingsOptions.errorClass);
    inputElement.classList.add(settingsOptions.inputErrorClass);
    errorElement.textContent = errorMessage;
}

function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(settingsOptions.errorClass);
    inputElement.classList.remove(settingsOptions.inputErrorClass);
    errorElement.textContent = '1';
}

function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(settingsOptions.inactiveButtonClass);
        buttonElement.setAttribute('disabled', '');
    }
    else {
        buttonElement.classList.remove(settingsOptions.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}

function hasInvalidInput(inputList) {
    return inputList.some(function(item) {
      return !item.validity.valid;
    });
}

function checkInputValidity(formElement, inputElement) {
    const isInputValid = inputElement.validity.valid;
    if(!isInputValid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    }
    else {
        hideInputError(formElement, inputElement);
    }
}

enableValidation(settingsOptions);