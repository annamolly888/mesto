(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n){var r=t.data,o=t.ownerId,i=t.userId,u=t.handleCardClick,c=t.handleDeleteIconClick,a=t.handleLikeIconClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=r.link,this._name=r.name,this._cardId=r._id,this._cardLikes=r.likes,this._ownerId=o,this._userId=i,this._handleCardClick=u,this._handleDeleteIconClick=c,this._handleLikeIconClick=a,this._templateSelector=n}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".cards__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".cards__image"),this._heading=this._element.querySelector(".cards__title"),this._likeButton=this._element.querySelector(".cards__like"),this._deleteButton=this._element.querySelector(".cards__trash"),this._likesNumber=this._element.querySelector(".cards__like-counter"),this._image.src=this._link,this._image.alt=this._name,this._heading.textContent=this._name,this._setEventListeners(),this.updateLikeNumbers(this._cardLikes),this._element}},{key:"cardIsLiked",value:function(){var e=this;return this.likesArray.some((function(t){return t._id===e._userId}))}},{key:"putLike",value:function(){this._likeButton.classList.add("element__like-button_active")}},{key:"removeLike",value:function(){this._likeButton.classList.remove("element__like-button_active")}},{key:"_changeLikeButtonStatus",value:function(){this.cardIsLiked()?this.putLike():this.removeLike()}},{key:"updateLikeNumbers",value:function(e){this.likesArray=e,this._likesNumber.textContent=e.length,this._changeLikeButtonStatus()}},{key:"_deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"getCardId",value:function(){return this._cardId}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleLikeIconClick()})),this._ownerId===this._userId?this._deleteButton.addEventListener("click",(function(){e._handleDeleteIconClick()})):(this._deleteButton.remove(),this._deleteButton=null),this._image.addEventListener("click",(function(){e._handleCardClick(e._link,e._name)}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this._enableSubmitButton()}},{key:"disableSubmitButton",value:function(){this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._inactiveButtonClass)}},{key:"_enableSubmitButton",value:function(){this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._inactiveButtonClass)}},{key:"_showInputError",value:function(e){this._formElement.querySelector("#".concat(e.name,"-error")).textContent=e.validationMessage,e.classList.add(this._inputErrorClass)}},{key:"_hideInputError",value:function(e){this._formElement.querySelector("#".concat(e.name,"-error")).textContent="",e.classList.remove(this._inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetFormValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"form__input_type_error"},c=document.querySelector(".cards"),a=document.querySelector(".profile__edit-button"),l=(document.querySelector(".form_type_profile"),document.querySelectorAll(".popup__close-button"),document.querySelector(".popup_type_profile-edit")),s=document.querySelector(".profile__add-button"),f=document.querySelector(".popup_type_profile-add"),p=document.querySelector(".form_type_cards"),y=(document.querySelector(".form__input_field_name"),document.querySelector(".form__input_field_job"),document.querySelector(".profile__title")),h=document.querySelector(".profile__description"),d=(document.querySelector(".form_type_cards"),document.querySelector(".form__input_title"),document.querySelector(".form__input_link"),document.querySelector(".popup_type_image")),m=(document.querySelector(".popup__description"),document.querySelector(".popup__img"),document.querySelector(".cards__like"),document.querySelector(".profile__avatar")),b=document.querySelector(".profile__avatar-container"),v=document.querySelector(".popup_type_avatar"),_=document.querySelector(".popup_type_delete");function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var k=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderCards",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addNewItem",value:function(e){this._container.prepend(e)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,P(r.key),r)}}function P(e){var t=function(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===w(t)?t:String(t)}var j=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.close()},(r=P(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=t,this._popupCloseButton=document.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._bigImage=t._popup.querySelector(".popup__img"),t._imageCaption=t._popup.querySelector(".popup__description"),t}return t=u,(n=[{key:"open",value:function(e,t){C(q(u.prototype),"open",this).call(this),this._bigImage.src=e,this._bigImage.alt=t,this._imageCaption.textContent=t}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(j);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}var A=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=t,this._userJob=n,this._userAvatar=userAvatar}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfoValues={},this._userInfoValues.title=this._userName.textContent,this._userInfoValues.job=this._userJob.textContent,this._userInfoValues}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._userName.textContent=t,this._userJob.textContent=n,this.changeProfileAvatar(r),this._id=o}},{key:"changeProfileAvatar",value:function(e){this._userAvatar.src=e}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==U(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(r);if(o){var n=N(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=r,n._popupForm=n._popup.querySelector(".form"),n._inputList=Array.from(n._popupForm.querySelectorAll(".form__input")),n._submitButton=n._popupForm.querySelector(".popup__save-button"),n._submitButtonText=n._submitButton.textContent,n._formValues={},n}return t=u,n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submitButton.textContent=e?t:this._submitButtonText}},{key:"setEventListeners",value:function(){var e=this;x(N(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){x(N(u.prototype),"close",this).call(this),this._popupForm.reset()}}],n&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(j);function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==J(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},H.apply(this,arguments)}function M(e,t){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},M(e,t)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(r);if(o){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===J(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._submitButton=t._popup.querySelector(".popup__form-button"),t}return t=u,(n=[{key:"setSubmitAction",value:function(e){this._handleDeleteSubmit=e}},{key:"setEventListeners",value:function(){var e=this;H(z(u.prototype),"setEventListeners",this).call(this),this._submitButton.addEventListener("click",(function(t){t.preventDefault(),e._handleDeleteSubmit()}))}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(j);function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==K(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===K(o)?o:String(o)),r)}var o}var W=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",headers:this.headers}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({link:e.link,name:e.name})}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then(this._checkResponse)}},{key:"changeUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.job})}).then(this._checkResponse)}},{key:"changeUserAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.link})}).then(this._checkResponse)}},{key:"putLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this.headers}).then(this._checkResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}}])&&Q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y,Z=new B(d),ee=new A(y,h,m),te=new i(formValidationConfig,v);te.enableValidation();var ne=new W({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-77",headers:{authorization:"800f28e7-a250-4ab8-bfd6-41ba14cda4a3","Content-Type":"application/json"}});Promise.all([ne.getUserInfo(),ne.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ee.setUserInfo(o),Y=o._id,ie.renderCards(i)})).catch((function(e){console.log("Ошибка: ".concat(e))}));var re=new $(_);re.setEventListeners(),a.addEventListener("click",(function(){ae.open(),ae.setInputValues(ee.getUserInfo()),le.resetFormValidation()}));var oe=function(e){var t=new n({data:e,ownerId:e.owner._id,userId:Y,handleCardClick:function(e,t){Z.open(e,t)},handleDeleteIconClick:function(){re.openPopup(),re.setSubmitAction((function(){ne.deleteCard(t.getCardId()).then((function(){t.deleteCard(),re.closePopup()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}))},handleLikeIconClick:function(){t.cardIsLiked()?ne.removeLike(t.getCardId()).then((function(e){t.updateLikeNumbers(e.likes)})).catch((function(e){console.log("Ошибка: ".concat(e))})):ne.putLike(t.getCardId()).then((function(e){t.updateLikeNumbers(e.likes)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}},".card-template");return t.generateCard()};Z.setEventListeners();var ie=new k({renderer:function(e){ie.addItem(oe(e))}},c),ue=new D(v,{handleFormSubmit:function(e){ue.renderLoading(!0),ne.changeUserAvatar(e).then((function(e){ee.changeProfileAvatar(e.avatar),ue.closePopup()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ue.renderLoading(!1)}))}});ue.setEventListeners(),b.addEventListener("click",(function(){ue.openPopup(),te.resetFormValidation()}));var ce=new D(f,{handleFormSubmit:function(e){addPopupForm.renderLoading(!0),ne.addNewCard(e).then((function(e){ie.addNewItem(oe(e)),addPopupForm.closePopup()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){addPopupForm.renderLoading(!1)}))}});ce.setEventListeners();var ae=new D(popupInfo,{handleFormSubmit:function(e){ae.renderLoading(!0),ne.changeUserInfo(e).then((function(e){ee.setUserInfo(e),ae.closePopup()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ae.renderLoading(!1)}))}});ae.setEventListeners(),a.addEventListener("click",(function(){ae.openPopup(),ae.setInputValues(ee.getProfileInfo()),le.resetFormValidation()})),s.addEventListener("click",(function(){ce.open(),se.resetFormValidation()}));var le=new i(u,l);le.enableValidation();var se=new i(u,p);se.enableValidation()})();