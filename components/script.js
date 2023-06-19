const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const formElement = document.querySelector(".popup__container");

let nameInput = document.querySelector(".form__input_name");
let jobInput = document.querySelector(".form__input_job");
let nameProfile = document.querySelector(".profile__title");
let jobProfile = document.querySelector(".profile__description");

function openOnEdit() {
  popup.classList.add("popup_active");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

editButton.addEventListener("click", openOnEdit);

function closePopup() {
  popup.classList.remove("popup_active");
}

function submitForm(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
}

closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", submitForm);
