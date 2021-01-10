import { combineReducers } from 'redux';
import { user } from './users';
import { planets } from './planets';

export default combineReducers({
    user,
    planets
})