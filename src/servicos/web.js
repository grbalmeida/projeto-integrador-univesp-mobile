import axios from 'axios';

const api = axios.create({
    baseURL: 'http://hubsolidarioararaquara.herokuapp.com/'
});

export default api;