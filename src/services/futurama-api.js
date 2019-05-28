const URL = 'https://futuramaapi.herokuapp.com/api/quotes/50';

const api = {
    getQuotes() {
        return fetch(URL)
            .then(response => response.json());
    }
};

export default api;