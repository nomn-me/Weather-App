const SERVER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'e6243cc3c6d0519709390bd0af07951a';
export let ERROR_MESS = '';

export function getData(cityName) {
    const URL = `${SERVER_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;

    return fetch(URL)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else if (response.status === 404) {
                throw new Error(`City ${cityName} not found`);
            } else {
                throw new Error('Something went wrong');
            }
        })
        .catch(error => {
            ERROR_MESS = error.message;
        });
}