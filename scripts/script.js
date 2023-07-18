const editButton = document.querySelector(".profile__edit-button");
const profileForm = document.querySelector(".form_type_profile");

const popupEdit = document.querySelector(".popup_type_profile-edit");
const profileCloseButton = popupEdit.querySelector(".popup__close-button");
const cardCloseButton = document.querySelector(".popup__close-button_add");
const buttonAdd = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_type_profile-add");

const cardTemplate = document.getElementById("card-template");
const cardsContainer = document.querySelector(".cards");

const nameInput = document.querySelector(".form__input_field_name");
const jobInput = document.querySelector(".form__input_field_job");
const nameProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__description");

// Для добавления картинки
const cardForm = document.querySelector(".form_type_cards");
const titleInput = document.querySelector(".form__input_title");
const linkInput = document.querySelector(".form__input_link");

// Попап картинок
const popupImage = document.querySelector(".popup_type_image");
const popupImageDescription = document.querySelector(".popup__description");
const popupImagePhoto = document.querySelector(".popup__img");
const popupImgClose = document.querySelector(".popup__close-button_img");

// Открыть попап
function openPopup(popup) {
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

//Для попапа редактирования
const openPopupEdit = () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEdit);
};

const closePopupAdd = () => {
  closePopup(popupAdd);
};

// submit попапа редактирования
function handleProfileFormSubmit(evt) {
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
    popupImagePhoto.alt = cardData.name;
    openPopup(popupImage);
  };

  cardImage.addEventListener("click", openPopupImg);

  return cardsElement;
};

initialCards.forEach((initialCards) => {
  const element = createCardElement(initialCards);
  cardsContainer.prepend(element);
});

const handleAddFormSubmit = (event) => {
  event.preventDefault();
  const name = titleInput.value;
  const link = linkInput.value;

  const newCardData = {
    name,
    link,
  };

  cardsContainer.prepend(createCardElement(newCardData));
  closePopupAdd();
  event.target.reset();
  enableValidation(selectors);
};

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
  const closeBtn = evt.target.classList.contains("popup__close");
  if (overlay || closeBtn) {
    closePopup(evt.target);
  }
};

profileForm.addEventListener("submit", handleProfileFormSubmit);
cardForm.addEventListener("submit", handleAddFormSubmit);
editButton.addEventListener("click", () => openPopupEdit());
profileCloseButton.addEventListener("click", () => closePopup(popupEdit));
cardCloseButton.addEventListener("click", () => closePopup(popupAdd));
buttonAdd.addEventListener("click", () => openPopup(popupAdd));
popupImgClose.addEventListener("click", () => closePopup(popupImage));
