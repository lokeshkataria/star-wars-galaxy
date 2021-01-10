import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
import {
    PLANETS_SEARCH,
    USER_LOGIN,
    USER_VERIFY,
} from './constants';
import { getUser, getPlanets, getUserAuthentication } from '../utils/StarWarsService';
import {
   addUser,
   userFetchError,
   setPlanet,
   loadingPlanets,
   planetsFetchError,
   userLoading
} from './actions';

export function* loginUser(action) {
   try {
      yield put(userLoading(true));
      const payload = yield call(getUser, action.payload);
      yield put(addUser(payload));
   } catch (error) {
      yield put(userFetchError());
   }
}

export function* setUserAuthentication() {
   try {
      yield put(userLoading(true));
      const payload = yield call(getUserAuthentication);
      if (payload) {
         yield put(addUser(payload));
      } else {
         yield put(userLoading(false));   
      }
   } catch (error) {
      yield put(userLoading(false));
   }
}

export function* searchPlanets(action) {
    try {
      yield put(loadingPlanets(true));
       const payload = yield call(getPlanets, action.payload);
       yield put(setPlanet(payload));
    } catch (error) {
       yield put(planetsFetchError());
    }
}

export default function* rootSaga() {
    yield takeLatest(USER_LOGIN, loginUser);
    yield takeLatest(PLANETS_SEARCH, searchPlanets);
    yield takeLatest(USER_VERIFY, setUserAuthentication);
}
