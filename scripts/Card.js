import {
  popupImage,
  popupImagePhoto,
  popupImageDescription,
  openPopup,
} from "./script.js";

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  // получение темплейта
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".cards__item")
      .cloneNode(true);

    return cardElement;
  }

  // генерация карточек
  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector(".cards__image");
    this._cardLike = this._element.querySelector(".cards__like");
    this._cardTitle = this._element.querySelector(".cards__title");
    this._cardDelete = this._element.querySelector(".cards__trash");
    this._cardTitle.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._setEventListeners();

    return this._element;
  }

  // лайк
  _like() {
    this._cardLike.classList.toggle("cards__like_active");
  }

  // удаление
  _deleteCard() {
    this._element.remove();
  }

  // удаление
  _handlePopupOpen() {
    openPopup(popupImage);
    popupImagePhoto.src = this._link;
    popupImagePhoto.alt = this._name;
    popupImageDescription.textContent = this._name;
  }

  _setEventListeners() {
    // лайк
    this._cardLike.addEventListener("click", () => {
      this._like();
    });

    // удаление
    this._element
      .querySelector(".cards__trash")
      .addEventListener("click", () => {
        this._deleteCard();
      });
    this._image.addEventListener("click", () => {
      this._handlePopupOpen();
    });
  }
}
