import {FORM, CITY_INPUT, LIKE_BUTTON} from './elements.js';
import {renderCurrentCity, renderData} from './render.js';
import {likeButton} from "./likeButton.js";

FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    renderData(CITY_INPUT.value);
})

window.addEventListener('load', (event) => {
    renderCurrentCity();
})

LIKE_BUTTON.addEventListener('click', (event) => {
    likeButton();
})