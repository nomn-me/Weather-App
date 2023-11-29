import {likedList} from "./likeButton.js";

export function isExist(value) {
    let city = likedList.find(city => city === value);
    return Boolean(city);
}