import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import {
  validationSettings,
  initialCards,
  cardsEl,
  editButton,
  popupEdit,
  buttonAdd,
  addForm,
  profileName,
  profileJob,
  popupImage,
  popupAdd,
} from "../scripts/constants.js";
import Section from "../scripts/Section.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import UserInfo from "../scripts/UserInfo.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import "./index.css";

const imagePopup = new PopupWithImage(popupImage);
const userInfo = new UserInfo(profileName, profileJob);

// PopupWithForm для редактирования профиля
const infoPopupForm = new PopupWithForm(popupEdit, {
  handleFormSubmit: ({ name, job }) => {
    userInfo.setUserInfo({ name, job });
  },
});

infoPopupForm.setEventListeners();

// Открытие окна редактирования профиля
editButton.addEventListener("click", () => {
  infoPopupForm.openPopup();
  infoPopupForm.setInputValues(userInfo.getUserInfo());
  profileInfoValidation.resetFormValidation();
});

// Карточки
const createCard = (item) => {
  const card = new Card(
    {
      data: item,
      handleCardClick: (link, name) => {
        imagePopup.openPopup(link, name);
      },
    },
    ".card-template"
  );

  const cardElement = card.generateCard();
  return cardElement;
};

imagePopup.setEventListeners();

// Рендер карточек
const defaultCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      defaultCards.addItem(createCard(item));
    },
  },
  cardsEl
);

defaultCards.renderCards(initialCards);

// PopupWithForm для добавления
const addPopupForm = new PopupWithForm(popupAdd, {
  handleFormSubmit: (data) => {
    defaultCards.addItem(createCard(data));
  },
});

addPopupForm.setEventListeners();

// Открытие попапа добавления картинки
buttonAdd.addEventListener("click", () => {
  addPopupForm.openPopup();
  photoAddingValidation.resetFormValidation();
});

// Валидация форм
const profileInfoValidation = new FormValidator(validationSettings, popupEdit);
profileInfoValidation.enableValidation();

const photoAddingValidation = new FormValidator(validationSettings, addForm);
photoAddingValidation.enableValidation();
