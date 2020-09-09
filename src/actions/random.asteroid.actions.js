import {call, put, takeLatest} from 'redux-saga/effects';
import {getRandomAsteroid} from '../apis/random.asteroid.api.js';
import RandomAsteroidActionTypes from '../action-types/random.asteroid.action.types.js';

export function getRandomAsteroidCall() {
  return {
    type: RandomAsteroidActionTypes.GET_RANDOM_ASTEROID,
  };
}

export function getRandomAsteroidSuccess(json) {
  return {
    type: RandomAsteroidActionTypes.GET_RANDOM_ASTEROID_SUCCESS,
    data: json,
  };
}

export function getRandomAsteroidFailure(error) {
  return {
    type: RandomAsteroidActionTypes.GET_RANDOM_ASTEROID_FAILURE,
    errorMessage: error,
  };
}

export function* getRandomAsteroidWorker() {
  try {
    const response = yield call(getRandomAsteroid);
    yield put(getRandomAsteroidSuccess(response));
  } catch (error) {
    put(getRandomAsteroidFailure(error));
  }
}

export function* getRandomAsteroidSaga() {
  yield takeLatest(
    RandomAsteroidActionTypes.GET_RANDOM_ASTEROID,
    getRandomAsteroidWorker,
  );
}
