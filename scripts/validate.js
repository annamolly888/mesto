const selectors = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_invalid",
};

// Показываем ошибку
function showError(inputElement, errorElement, selectors) {
  inputElement.classList.add(selectors.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

// Скрываем ошибку
function hideError(inputElement, errorElement, selectors) {
  inputElement.classList.remove(selectors.inputErrorClass);
  errorElement.textContent = "";
}

// Проверяем валидность инпутов
function checkInputValidity(inputElement, formElement, selectors) {
  inputElement.setCustomValidity("");

  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);

  if (!isInputValid) {
    showError(inputElement, errorElement, selectors);
  } else {
    hideError(inputElement, errorElement, selectors);
  }
}

// Дизаблим кнопку
function disabledButton(buttonElement, selectors) {
  buttonElement.disabled = "disabled";
  buttonElement.classList.add(selectors.inactiveButtonClass);
}

// Активируем кнопку
function enabledButton(buttonElement, selectors) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(selectors.inactiveButtonClass);
}

// Переключаем состояние кнопки
function toggleButtonState(buttonElement, isActive, selectors) {
  if (!isActive) {
    disabledButton(buttonElement, selectors);
  } else {
    enabledButton(buttonElement, selectors);
  }
}

// Очищаем ошибку у инпутов
function cleanInputError(formElement) {
  const inputElement = formElement.querySelectorAll(selectors.inputSelector);
  inputElement.forEach((input) => {
    const errorElement = formElement.querySelector(`#${input.name}-error`);
    hideError(input, errorElement, selectors);
  });
}

// Вешаем обработчики
function setEventListener(formElement, selectors) {
  const inputList = formElement.querySelectorAll(selectors.inputSelector);
  const submitButtonElement = formElement.querySelector(
    selectors.submitButtonSelector
  );
  toggleButtonState(
    submitButtonElement,
    formElement.checkValidity(),
    selectors
  );

  formElement.addEventListener("reset", () => {
    disabledButton(submitButtonElement, selectors);
  });

  // Перебираем все инпуты и вешаем на каждый инпут обработчик события input
  [...inputList].forEach(function (inputElement) {
    inputElement.addEventListener("input", function () {
      toggleButtonState(
        submitButtonElement,
        formElement.checkValidity(),
        selectors
      );
      checkInputValidity(inputElement, formElement, selectors);
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
function enableValidation(selectors) {
  const formsList = document.querySelectorAll(selectors.formSelector);

  [...formsList].forEach(function (formElement) {
    setEventListener(formElement, selectors);
  });
}

enableValidation(selectors);
