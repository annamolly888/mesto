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
    this._setEventListeners();
    this._element.querySelector(".cards__title").textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;

    return this._element;
  }

  // лайк
  _like() {
    this._element
      .querySelector(".cards__like")
      .classList.toggle("cards__like_active");
  }

  // удаление
  _deleteBtn() {
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
    this._element
      .querySelector(".cards__like")
      .addEventListener("click", () => {
        this._like();
      });

    // удаление
    this._element
      .querySelector(".cards__trash")
      .addEventListener("click", () => {
        this._deleteBtn();
      });
    this._image.addEventListener("click", () => {
      this._handlePopupOpen();
    });
  }
}
