

import axios from 'axios';
const BASE_URL = 'http://aleksbcg.beget.tech';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
});