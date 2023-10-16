import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._bigImage = this._popup.querySelector(".popup__img");
    this._imageCaption = this._popup.querySelector(".popup__description");
  }

  open(link, name) {
    super.open();
    this._bigImage.src = link;
    this._bigImage.alt = name;
    this._imageCaption.textContent = name;
  }
}
