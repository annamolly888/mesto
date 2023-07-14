const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const formElement = document.querySelector(".form");

const popupEdit = document.querySelector(".popup_edit");
const buttonCloseEdit = popupEdit.querySelector(".popup__close-button");
const buttonCloseAdd = document.querySelector(".popup__close_add");
const formElement1 = document.querySelector(".popup__container");
const buttonAdd = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_add");

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

const cardTemplate = document.getElementById("card-template");
const cardsContainer = document.querySelector(".cards");

let nameInput = document.querySelector(".form__input_field_name");
let jobInput = document.querySelector(".form__input_field_job");
let nameProfile = document.querySelector(".profile__title");
let jobProfile = document.querySelector(".profile__description");

// Открыть попап
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

//Закрыть попап
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//Для попапа редактирования
const openPopupEdit = () => {
  openPopup(popupEdit);
};

const closePopupEdit = () => {
  closePopup(popupEdit);
};

//Для попапа добавления
const openPopupAdd = () => {
  openPopup(popupAdd);
};

const closePopupAdd = () => {
  closePopup(popupAdd);
};

editButton.addEventListener("click", () => openPopup(popupEdit));
buttonCloseEdit.addEventListener("click", () => closePopup(popupEdit));
buttonCloseAdd.addEventListener("click", () => closePopup(popupAdd));
buttonAdd.addEventListener("click", () => openPopup(popupAdd));

// submit попапа редактирования
function handleFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEdit);
}

const createCardElement = (cardData) => {
  const cardsElement = cardTemplate.content
    .querySelector(".cards__item")
    .cloneNode(true);

  const cardImage = cardsElement.querySelector(".cards__image");
  const cardTitle = cardsElement.querySelector(".cards__title");
  const cardDeleteButton = cardsElement.querySelector(".cards__trash");
  const cardLikeButton = cardsElement.querySelector(".cards__like");

  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  const handleDelete = () => {
    cardsElement.remove();
  };

  const handleLike = () => {
    cardLikeButton.classList.toggle("cards__like_active");
  };

  cardDeleteButton.addEventListener("click", handleDelete);
  cardLikeButton.addEventListener("click", handleLike);

  // Открываем попап картинки
  const openPopupImg = () => {
    popupImageDescription.textContent = cardData.name;
    popupImagePhoto.src = cardData.link;
    openPopup(popupImage);
  };

  cardImage.addEventListener("click", openPopupImg);

  return cardsElement;
};

// Рендерим элементы
const renderAddElement = (cardsElement) => {
  cardsContainer.prepend(cardsElement);
};

initialCards.forEach((initialCards) => {
  const element = createCardElement(initialCards);
  renderAddElement(element);
});

// Для добавления картинки
const formElementAdd = document.querySelector(".popup__content_add");
const titleInput = document.querySelector(".form__input_title");
const linkInput = document.querySelector(".form__input_link");

const handleAddFormSubmit = (event) => {
  event.preventDefault();
  const name = titleInput.value;
  const link = linkInput.value;

  const newCardData = {
    name,
    link,
  };

  renderAddElement(createCardElement(newCardData));
  closePopupAdd();
  event.target.reset();
};

formElementAdd.addEventListener("submit", handleAddFormSubmit);

// Попап картинок
const popupImage = document.querySelector(".popup_img");
const popupImageDescription = document.querySelector(".popup__description");
const popupImagePhoto = document.querySelector(".popup__img");

const handleImgClick = (cardData) => {
  cardData.preventDefault();
  cardData.name = popupImageDescription.textContent;
  cardData.link = popupImagePhoto.src;
};

const popupImgClose = document.querySelector(".popup__close-button_img");

const closePopupImg = () => {
  closePopup(popupImage);
};

popupImgClose.addEventListener("click", () => closePopup(popupImage));
