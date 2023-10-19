export default class Card {
  constructor(
    {
      data,
      ownerId,
      userId,
      handleCardClick,
      handleDeleteIconClick,
      handleLikeIconClick,
    },
    templateSelector
  ) {
    this._link = data.link;
    this._name = data.name;
    this._cardId = data._id;
    this._cardLikes = data.likes;
    this._ownerId = ownerId;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._handleLikeIconClick = handleLikeIconClick;
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
    this._likesNumber = this._element.querySelector(".cards__like-counter");

    this._image.src = this._link;
    this._image.alt = this._name;
    this._heading.textContent = this._name;

    this._setEventListeners();
    this.updateLikeNumbers(this._cardLikes);
    return this._element;
  }

  // лайк
  // _like() {
  //   this._likeButton.classList.toggle("cards__like_active");
  // }

  cardIsLiked() {
    return this.likesArray.some((user) => user._id === this._userId);
  }

  putLike() {
    this._likeButton.classList.add("cards__like_active");
  }

  removeLike() {
    this._likeButton.classList.remove("cards__like_active");
  }

  _changeLikeButtonStatus() {
    if (this.cardIsLiked()) {
      this.putLike();
    } else {
      this.removeLike();
    }
  }

  updateLikeNumbers(data) {
    this.likesArray = data;
    this._likesNumber.textContent = data.length;
    this._changeLikeButtonStatus();
  }

  // удаление
  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  getCardId() {
    return this._cardId;
  }

  _setEventListeners() {
    // лайк
    this._likeButton.addEventListener("click", () => {
      this._handleLikeIconClick();
    });

    // удаление
    if (this._ownerId === this._userId) {
      this._deleteButton.addEventListener("click", () => {
        this._handleDeleteIconClick();
      });
    } else {
      this._deleteButton.remove();
      this._deleteButton = null;
    }

    // this._element
    //   .querySelector(".cards__trash")
    //   .addEventListener("click", () => {
    //     this._deleteCard();
    //   });

    // открытие
    this._image.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });
  }
}
