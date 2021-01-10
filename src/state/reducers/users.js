import { USER_ADD, USER_REMOVE, USER_FETCH_ERROR, USER_LOADING } from '../constants';

export const initialUser = {
    isLoggedIn: false,
    loading: false
};

const setUser = (state, user) => {
    return {
        ...state,
        ...user
    }
}

export const user = (state = initialUser, action) => {
    switch (action.type) {
        case USER_ADD:
            return setUser(state, { ...action.payload, loading: false, isLoggedIn: !action.payload.authenticationFailed});
        case USER_REMOVE:
            return setUser(state, {isLoggedIn: false});
        case USER_FETCH_ERROR:
            return setUser(state, { error: true, loading: false });
        case USER_LOADING:
            return setUser(state, { loading: action.payload });
        default:
            return state
    }
};
