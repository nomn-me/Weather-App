import {
    CITY_INPUT,
    CITY,
    TEMP,
    TEMP_FEELS_LIKE,
    TEMP_IMG,
    ERROR_DIV,
    LIKE_BUTTON,
    SUBTITLE_CITY,
    SUBTITLE,
    TITLE,
    LIKE_BUTTON_ICON
} from './elements.js';
import {ERROR_MESS} from "./getData.js";
import {createElement} from "./createElement.js";
import {FAVORITES} from "./elements.js"
import {likedList} from "./likeButton.js";
import {getCity} from "./getCity.js";
import {getData} from './getData.js';
import {isExist} from './helpers.js';

let GEO_CITY = '';

export function render() {
    FAVORITES.replaceChildren();

    for (const item of likedList) {
        let newItem = createElement('li', 'favorites__item', item);
        FAVORITES.append(newItem);
    }
}

export function renderData(data) {
    getData(data)
        .then(data => {
            CITY.textContent = data.name;
            TEMP.textContent = Math.round(data.main.temp);
            TEMP_FEELS_LIKE.textContent = Math.round(data.main.feels_like);
            TEMP_IMG.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png';
            CITY_INPUT.value = '';
            ERROR_DIV.style.display = 'none';
            LIKE_BUTTON.disabled = false;
            TITLE.style.margin = '32px';
            SUBTITLE.style.display = 'none';
            LIKE_BUTTON_ICON.style = '';
            if (isExist(CITY.textContent)) {
                LIKE_BUTTON_ICON.style.fill = 'red';
            }


        })
        .catch(error => {
            ERROR_DIV.style.display = 'block';
            ERROR_DIV.textContent = ERROR_MESS;
        })
}

export function renderCurrentCity() {
    getCity()
        .then(data => {
            GEO_CITY = data.city;

            // Что-бы не выдавал результаты для западного Питера(Да костыль)
            if (GEO_CITY === 'St Petersburg') {
                GEO_CITY = 'Saint Petersburg';
            }

            getData(GEO_CITY)
                .then(data => {
                    CITY.textContent = data.name;
                    SUBTITLE_CITY.textContent = data.name;
                    TEMP.textContent = Math.round(data.main.temp);
                    TEMP_FEELS_LIKE.textContent = Math.round(data.main.feels_like);
                    TEMP_IMG.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png';
                    ERROR_DIV.style.display = 'none';
                    LIKE_BUTTON.disabled = false;
                })
                .catch(error => {
                    ERROR_DIV.style.display = 'block';
                    ERROR_DIV.textContent = ERROR_MESS;
                })
        })
}