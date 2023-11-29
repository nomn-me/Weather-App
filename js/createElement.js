import {setEvent} from "./setEvent.js";

export function createElement(tag, className, city) {
    let element = document.createElement(tag);
    element.classList.add(className);
    element.textContent = city;
    element.style.cursor = 'pointer';
    setEvent(element);

    return element;
}