const CITY_URL = 'https://ipapi.co/json/';
export let ERROR_MESS = '';

export function getCity() {
    return fetch(CITY_URL)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .catch(error => {
            ERROR_MESS = error.message;
        });
}