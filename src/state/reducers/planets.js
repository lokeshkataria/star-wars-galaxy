import { PLANETS_FETCH_ERROR, PLANETS_SET, PLANETS_LOADING } from '../constants';

const initialPlanets = {
    list: [],
    error: false,
    loading: false
};

const setPlanets = (state, data) => {
    return {
        ...state,
        ...data
    }
}

export const planets = (state = initialPlanets, action) => {
    switch (action.type) {
        case PLANETS_SET:
            return setPlanets(state, {
                list: [...action.payload],
                error: false,
                loading: false
            });
        case PLANETS_FETCH_ERROR:
            return setPlanets(state, {
                error: true,
                loading: false
            });
        case PLANETS_LOADING:
            return setPlanets(state, {
                loading: true
            });
        default:
            return state
    }
};