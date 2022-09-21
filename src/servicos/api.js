import axios from 'axios';

const api = axios.create({
    baseURL: 'http://hub-solidario-araraquara.herokuapp.com/'
});

export default api;