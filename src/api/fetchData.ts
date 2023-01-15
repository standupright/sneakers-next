import axios from 'axios';
import { Price } from '../types/prices';
export const fetchData = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
            headers: { "Accept-Encoding": "gzip,deflate,compress" }
        });
        const prices: Price[] = await res.data;
        return prices;
    } catch (e) {
        throw e;
    }
};
