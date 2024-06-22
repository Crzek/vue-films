import axios from 'axios';
import { URL, TOKEN } from '@/share/utils/constants.ts';

//creamos isntacia Axios
const api = axios.create({
    baseURL: `${URL}`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`
    }
});

export default api;
