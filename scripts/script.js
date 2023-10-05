import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const editButton = document.querySelector(".profile__edit-button");
const profileForm = document.querySelector(".form_type_profile");
const closeButtons = document.querySelectorAll(".popup__close-button");

const popupEdit = document.querySelector(".popup_type_profile-edit");
const buttonAdd = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_type_profile-add");

const addForm = document.querySelector(".form_type_cards");

const nameInput = document.querySelector(".form__input_field_name");
const jobInput = document.querySelector(".form__input_field_job");
const nameProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__description");

// Для добавления картинки
const cardForm = document.querySelector(".form_type_cards");
const titleInput = document.querySelector(".form__input_title");
const linkInput = document.querySelector(".form__input_link");

// Попап картинок
export const popupImage = document.querySelector(".popup_type_image");
export const popupImageDescription = document.querySelector(
  ".popup__description"
);
export const popupImagePhoto = document.querySelector(".popup__img");

const validationSettings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "form__input_type_error",
};

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//   экземпляр рендера карточек
initialCards.forEach((item) => {
  const card = new Card(item, ".card-template");
  const cardElement = card.generateCard();
  document.querySelector(".cards").append(cardElement);
});

//  экземпляры валидации форм
const profileFormValidation = new FormValidator(
  validationSettings,
  profileForm
);
profileFormValidation.enableValidation();
const addFormValidation = new FormValidator(validationSettings, addForm);
addFormValidation.enableValidation();

// создание карточек
const createElement = (evt) => {
  evt.preventDefault();
  const newCard = new Card(
    { name: titleInput.value, link: linkInput.value },
    ".card-template"
  );
  const cardElement = newCard.generateCard();
  document.querySelector(".cards").prepend(cardElement);
  addForm.reset();
  addFormValidation.disableSubmitButton();
  closePopup(popupAdd);
};

// Открыть попап
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("click", handlePopupClose);
  document.addEventListener("keydown", closePopupEsc);
}

//Закрыть попап
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("click", handlePopupClose);
  document.removeEventListener("keydown", closePopupEsc);
}

// закрытие клавишей esc
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}

// оверлей
const handlePopupClose = (evt) => {
  const overlay = evt.target.classList.contains("popup");
  const closeBtn = evt.target.classList.contains("popup__close-button");
  if (overlay || closeBtn) {
    closePopup(evt.target.closest(".popup"));
  }
};

popupEdit.addEventListener("mousedown", handlePopupClose);
popupAdd.addEventListener("mousedown", handlePopupClose);
popupImage.addEventListener("click", handlePopupClose);

//Для попапа редактирования
const openPopupEdit = () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEdit);
};

// submit попапа редактирования
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEdit);
}

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

profileForm.addEventListener("submit", handleProfileFormSubmit);
cardForm.addEventListener("submit", createElement);
editButton.addEventListener("click", () => openPopupEdit());
buttonAdd.addEventListener("click", () => openPopup(popupAdd));
