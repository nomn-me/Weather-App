import {renderData} from "./render.js";

export function setEvent(element) {
    element.addEventListener('click', (event) => {
        renderData(element.textContent);
    })
}