import {
    PLANETS_SEARCH,
    USER_LOGIN,
    USER_FETCH_ERROR,
    USER_ADD,
    PLANETS_SET,
    PLANETS_FETCH_ERROR,
    USER_VERIFY,
    USER_LOADING,
    PLANETS_LOADING,
    USER_REMOVE
} from './constants';

export const addUser = (payload) => {
    return {
        type: USER_ADD,
        payload
    }
}

export const login = (payload) => {
    return {
        type: USER_LOGIN,
        payload
    }
}

export const search = (payload) => {
    return {
        type: PLANETS_SEARCH,
        payload
    }
}

export const userFetchError = () => {
    return {
        type: USER_FETCH_ERROR
    }
}

export const setPlanet = (payload) => {
    return {
        type: PLANETS_SET,
        payload
    }
}

export const loadingPlanets = (payload) => {
    return {
        type: PLANETS_LOADING,
        payload
    }
}

export const planetsFetchError = (payload) => {
    return {
        type: PLANETS_FETCH_ERROR,
        payload
    }
}


export const userLoading = (payload) => {
    return {
        type: USER_LOADING,
        payload
    }
}

export const userVerify = () => {
    return {
        type: USER_VERIFY
    }
}

export const userLogout = ()  => {
    return {
        type: USER_REMOVE
    }
}