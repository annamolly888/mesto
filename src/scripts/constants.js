export const validationSettings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "form__input_type_error",
};

export const cardsEl = document.querySelector(".cards");

export const editButton = document.querySelector(".profile__edit-button");
export const profileForm = document.querySelector(".form_type_profile");
export const closeButtons = document.querySelectorAll(".popup__close-button");

export const popupEdit = document.querySelector(".popup_type_profile-edit");
export const buttonAdd = document.querySelector(".profile__add-button");
export const popupAdd = document.querySelector(".popup_type_profile-add");

export const addForm = document.querySelector(".form_type_cards");

export const nameInput = document.querySelector(".form__input_field_name");
export const jobInput = document.querySelector(".form__input_field_job");
export const profileName = document.querySelector(".profile__title");
export const profileJob = document.querySelector(".profile__description");

// Для добавления картинки
export const cardForm = document.querySelector(".form_type_cards");
export const titleInput = document.querySelector(".form__input_title");
export const linkInput = document.querySelector(".form__input_link");

// Попап картинок
export const popupImage = document.querySelector(".popup_type_image");
export const popupImageDescription = document.querySelector(
  ".popup__description"
);
export const popupImagePhoto = document.querySelector(".popup__img");

// Лайк
export const likeButton = document.querySelector(".cards__like");

export const initialCards = [
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
