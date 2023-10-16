import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._bigImage = document.querySelector(".popup__img");
    this._imageCaption = document.querySelector(".popup__description");
  }

  openPopup(link, name) {
    super.openPopup();
    this._bigImage.src = link;
    this._bigImage.alt = name;
    this._imageCaption.textContent = name;
  }
}
