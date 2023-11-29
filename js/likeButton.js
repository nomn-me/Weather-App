import {isExist} from "./helpers.js";
import {CITY, LIKE_BUTTON, LIKE_BUTTON_ICON} from "./elements.js";
import {render} from "./render.js";

LIKE_BUTTON.disabled = true;
export let likedList = [];

export function likeButton() {
    if (isExist(CITY.textContent)) {
        likedList = likedList.filter((element) => element !== CITY.textContent);
        LIKE_BUTTON_ICON.style = '';
    } else {
        likedList.push(CITY.textContent);
        LIKE_BUTTON_ICON.style.fill = 'red';
    }

    render();
}