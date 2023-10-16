export default class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
  }

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
    this._heading = this._element.querySelector(".cards__title");
    this._likeButton = this._element.querySelector(".cards__like");
    this._deleteButton = this._element.querySelector(".cards__trash");

    this._image.src = this._link;
    this._image.alt = this._name;
    this._heading.textContent = this._name;

    this._setEventListeners();
    return this._element;
  }

  // лайк
  _like() {
    this._likeButton.classList.toggle("cards__like_active");
  }

  // удаление
  _deleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    // лайк
    this._likeButton.addEventListener("click", () => {
      this._like();
    });

    // удаление
    this._element
      .querySelector(".cards__trash")
      .addEventListener("click", () => {
        this._deleteCard();
      });

    // открытие
    this._image.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });
  }
}
