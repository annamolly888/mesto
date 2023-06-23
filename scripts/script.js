const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const formElement = document.querySelector(".form");

let nameInput = document.querySelector(".form_field_name");
let jobInput = document.querySelector(".form_field_job");
let nameProfile = document.querySelector(".profile__title");
let jobProfile = document.querySelector(".profile__description");

function openOnEdit() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function submitForm(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
}

editButton.addEventListener("click", openOnEdit);
closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", submitForm);
