import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
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
} from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import "./index.css";

const imagePopup = new PopupWithImage(popupImage);
const userInfo = new UserInfo(profileName, profileJob);

// PopupWithForm для редактирования профиля
const infoPopupForm = new PopupWithForm(popupEdit, {
  handleFormSubmit: ({ title, job }) => {
    userInfo.setUserInfo({ title, job });
  },
});

infoPopupForm.setEventListeners();

// Открытие окна редактирования профиля
editButton.addEventListener("click", () => {
  infoPopupForm.open();
  infoPopupForm.setInputValues(userInfo.getUserInfo());
  profileInfoValidation.resetFormValidation();
});

// Карточки
const createCard = (item) => {
  const card = new Card(
    {
      data: item,
      handleCardClick: (link, name) => {
        imagePopup.open(link, name);
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
const popupAddCard = new PopupWithForm(popupAdd, {
  handleFormSubmit: (data) => {
    defaultCards.addItem(createCard(data));
  },
});

popupAddCard.setEventListeners();

// Открытие попапа добавления картинки
buttonAdd.addEventListener("click", () => {
  popupAddCard.open();
  photoAddingValidation.resetFormValidation();
});

// Валидация форм
const profileInfoValidation = new FormValidator(validationSettings, popupEdit);
profileInfoValidation.enableValidation();

const photoAddingValidation = new FormValidator(validationSettings, addForm);
photoAddingValidation.enableValidation();
