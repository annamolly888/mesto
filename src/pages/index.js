import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  validationSettings,
  cardsEl,
  editButton,
  popupEdit,
  buttonAdd,
  addForm,
  profileName,
  profileJob,
  popupAdd,
  popupImage,
  popupAvatar,
  profileAvatar,
  profileAvatarContainer,
  popupDeleteCard,
} from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirmDelete from "../components/PopupConfirmDelete.js";
import Api from "../components/Api";
import "./index.css";

const imagePopup = new PopupWithImage(popupImage);
const userInfo = new UserInfo(profileName, profileJob, profileAvatar);

let userId;

const avatarChangeValidation = new FormValidator(
  validationSettings,
  popupAvatar
);
avatarChangeValidation.enableValidation();

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-77",
  headers: {
    authorization: "800f28e7-a250-4ab8-bfd6-41ba14cda4a3",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    defaultCards.renderCards(cards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

// Попап подтверждения удаления карточки
const popupConfirmDelete = new PopupConfirmDelete(popupDeleteCard);

popupConfirmDelete.setEventListeners();

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
      ownerId: item.owner._id,
      userId: userId,
      handleCardClick: (link, name) => {
        imagePopup.open(link, name);
      },
      handleDeleteIconClick: () => {
        popupConfirmDelete.open();
        popupConfirmDelete.setSubmitAction(() => {
          api
            .deleteCard(card.getCardId())
            .then(() => {
              card.deleteCard();
              popupConfirmDelete.close();
            })
            .catch((err) => {
              console.log(`Ошибка: ${err}`);
            });
        });
      },
      handleLikeIconClick: () => {
        if (card.cardIsLiked()) {
          api
            .removeLike(card.getCardId())
            .then((data) => {
              card.updateLikeNumbers(data.likes);
            })
            .catch((err) => {
              console.log(`Ошибка: ${err}`);
            });
        } else {
          api
            .putLike(card.getCardId())
            .then((data) => {
              card.updateLikeNumbers(data.likes);
            })
            .catch((err) => {
              console.log(`Ошибка: ${err}`);
            });
        }
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
    renderer: (item) => {
      defaultCards.addItem(createCard(item));
    },
  },
  cardsEl
);

// PopupWithForm для изменения аватара
const avatarChangeForm = new PopupWithForm(popupAvatar, {
  handleFormSubmit: (data) => {
    avatarChangeForm.renderLoading(true);
    api
      .changeUserAvatar(data)
      .then((data) => {
        userInfo.changeProfileAvatar(data.avatar);
        avatarChangeForm.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        avatarChangeForm.renderLoading(false);
      });
  },
});

avatarChangeForm.setEventListeners();

// Открытие окна изменения аватара
profileAvatarContainer.addEventListener("click", () => {
  avatarChangeForm.open();
  avatarChangeValidation.resetFormValidation();
});

// PopupWithForm для добавления
const popupAddCard = new PopupWithForm(popupAdd, {
  handleFormSubmit: (data) => {
    popupAddCard.renderLoading(true);
    api
      .addNewCard(data)
      .then((res) => {
        defaultCards.addNewItem(createCard(res));
        popupAddCard.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupAddCard.renderLoading(false);
      });
  },
});

popupAddCard.setEventListeners();

// PopupWithForm для редактирования профиля
const infoPopupForm = new PopupWithForm(popupEdit, {
  handleFormSubmit: (data) => {
    infoPopupForm.renderLoading(true);
    api
      .changeUserInfo(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        infoPopupForm.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        infoPopupForm.renderLoading(false);
      });
  },
});

infoPopupForm.setEventListeners();

// Открытие окна редактирования профиля
editButton.addEventListener("click", () => {
  infoPopupForm.open();
  infoPopupForm.setInputValues(userInfo.getUserInfo());
  profileInfoValidation.resetFormValidation();
});

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
