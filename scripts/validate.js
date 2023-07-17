const selector = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_invalid",
};

// Показываем ошибку
function showError(inputElement, errorElement, selector) {
  inputElement.classList.add(selector.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

// Скрываем ошибку
function hideError(inputElement, errorElement, selector) {
  inputElement.classList.remove(selector.inputErrorClass);
  errorElement.textContent = "";
}

// Проверяем валидность инпутов
function checkInputValidity(inputElement, formElement, selector) {
  inputElement.setCustomValidity("");

  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);

  if (!isInputValid) {
    showError(inputElement, errorElement, selector);
  } else {
    hideError(inputElement, errorElement, selector);
  }
}

// Дизаблим кнопку
function disabledButton(buttonElement, selector) {
  buttonElement.disabled = "disabled";
  buttonElement.classList.add(selector.inactiveButtonClass);
}

// Активируем кнопку
function enabledButton(buttonElement, selector) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(selector.inactiveButtonClass);
}

// Переключаем состояние кнопки
function toggleButtonState(buttonElement, isActive, selector) {
  if (!isActive) {
    disabledButton(buttonElement, selector);
  } else {
    enabledButton(buttonElement, selector);
  }
}

// Очищаем состояние кнопки сохранения
function cleanButtonState(formElement) {
  const buttonElement = formElement.querySelector(".popup__save-button");
  disabledButton(buttonElement, selector);
}

// Очищаем ошибку у инпутов
function cleanInputError(formElement) {
  const inputElement = formElement.querySelectorAll(selector.inputSelector);
  inputElement.forEach((input) => {
    const errorElement = formElement.querySelector(`#${input.name}-error`);
    hideError(input, errorElement, selector);
  });
}

// Вешаем обработчики
function setEventListener(formElement, selector) {
  const inputList = formElement.querySelectorAll(selector.inputSelector);
  const submitButtonElement = formElement.querySelector(
    selector.submitButtonSelector
  );
  toggleButtonState(submitButtonElement, formElement.checkValidity(), selector);

  // Перебираем все инпуты и вешаем на каждый инпут обработчик события input
  [...inputList].forEach(function (inputElement) {
    inputElement.addEventListener("input", function () {
      toggleButtonState(
        submitButtonElement,
        formElement.checkValidity(),
        selector
      );
      checkInputValidity(inputElement, formElement, selector);
    });
  });

  // Вешаем submit
  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (!formElement.checkValidity()) return;
  });
}

// включение валидации вызовом enableValidation
// все настройки передаются при вызове
function enableValidation(selector) {
  const formsList = document.querySelectorAll(selector.formSelector);

  [...formsList].forEach(function (formElement) {
    setEventListener(formElement, selector);
  });
}

enableValidation(selector);
