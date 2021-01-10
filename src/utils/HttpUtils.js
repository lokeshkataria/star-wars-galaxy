import axios from 'axios';

export const getRequest = async (url, params) => {
    try {
        const response = await axios.get(url, {
            params
        });
        return response.data;
    } catch {
        return Promise.reject();
    }
}