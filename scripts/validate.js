const settingsOptions = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

function enableValidation() {
    const formList = Array.from(document.querySelectorAll(settingsOptions.formSelector));
    formList.forEach(function(formElement) {
        setEventListeners(formElement);
    });
}

function setEventListeners(formElement) {
    formElement.addEventListener('submit', function(evt) {
        evt.preventDefault();
        console.log('yep');
    });
    const inputList = Array.from(formElement.querySelectorAll(settingsOptions.inputSelector));
    inputList.forEach(function(inputElement) {
        inputElement.addEventListener('input', function() {
            console.log('yep x2');
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
    errorElement.textContent = '';
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

enableValidation();