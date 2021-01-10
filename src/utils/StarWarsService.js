import { getRequest } from './HttpUtils';
import { setItem, getItem } from './StorageService';
import ApiConfig from '../config/api.json';

const USER_STORAGE_NAME = 'user';

export const getUser = async ({username, password}) => {
    try {
        const { results } = await getRequest(ApiConfig.user, {
            name: username
        });

        const filteredResult = results.filter(result => {
            const { properties: { name, birth_year } } = result;
            // match password with brith year and username with name
            return (
                username.toLowerCase() === name.toLowerCase() &&
                birth_year.replace(' ', '') === password
            );
        });
        if (filteredResult && filteredResult.length > 0) {
            const user = filteredResult[0].properties;
            const userData = { name: user.name };
            setItem(USER_STORAGE_NAME, JSON.stringify(userData));
            return userData;
        } else {
            return { authenticationFailed: true};
        }
        
    } catch(error) {
        return Promise.reject();
    }
}

export const getPlanets = async (searchTerm) => {
    try {
        const { results } = await getRequest(ApiConfig.planets, {
            search: searchTerm
        });

        return results.map(result => result.properties);
    } catch(error) {
        return Promise.reject();
    }
}

export const getUserAuthentication = () => {
    let user = {};
    user = getItem(USER_STORAGE_NAME);
    return user ? JSON.parse(user) : null;
}
