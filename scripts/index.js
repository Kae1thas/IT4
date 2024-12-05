import { renderCards, createCard } from './cards.js';

// Массив начальных карточек
const initialCards = [
    { name: "Архыз", link: "http://127.0.0.1:54757/card_1.jpg" },
    { name: "Челябинская область", link: "http://127.0.0.1:54757/card_2.jpg" },
    { name: "Иваново", link: "http://127.0.0.1:54757/card_3.jpg" },
    { name: "Камчатка", link: "http://127.0.0.1:54757/card_3.jpg" },
    { name: "Холмогорский район", link: "http://127.0.0.1:54757/card_3.jpg" },
    { name: "Байкал", link: "http://127.0.0.1:54757/card_3.jpg" }
];

// Рендер начальных карточек
document.addEventListener("DOMContentLoaded", () => {
    const placesList = document.querySelector(".places__list");
    renderCards(placesList, initialCards);
});

// Закрытие попапов
document.querySelectorAll(".popup__close").forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
        const popup = closeButton.closest(".popup");
        popup.classList.remove("popup_is-opened");
    });
});

// Открытие/закрытие попапа редактирования профиля
const editProfileButton = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector(".popup_type_edit");
const nameInput = document.querySelector(".popup__input_type_name");
const descriptionInput = document.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

editProfileButton.addEventListener("click", () => {
    nameInput.value = profileTitle.textContent;
    descriptionInput.value = profileDescription.textContent;
    editPopup.classList.add("popup_is-opened");
});

document.querySelector(".popup__form[name='edit-profile']").addEventListener("submit", (event) => {
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    editPopup.classList.remove("popup_is-opened");
});

// Открытие/закрытие попапа добавления карточки
const addCardButton = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector(".popup_type_new-card");
const cardNameInput = document.querySelector(".popup__input_type_card-name");
const cardLinkInput = document.querySelector(".popup__input_type_url");
const placesList = document.querySelector(".places__list");

addCardButton.addEventListener("click", () => {
    newCardPopup.classList.add("popup_is-opened");
});

document.querySelector(".popup__form[name='new-place']").addEventListener("submit", (event) => {
    event.preventDefault();

    const newCard = createCard({
        name: cardNameInput.value,
        link: cardLinkInput.value
    });

    placesList.prepend(newCard); // Добавляем новую карточку в начало списка
    cardNameInput.value = "";
    cardLinkInput.value = "";
    newCardPopup.classList.remove("popup_is-opened");
});