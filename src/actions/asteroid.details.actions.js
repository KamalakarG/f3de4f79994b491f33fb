import {call, put, takeLatest} from 'redux-saga/effects';
import {asteroidDetails} from '../apis/asteroid.details.api';
import AsteroidDetailsActionTypes from '../action-types/asteroid.details.action.types.js';

export function asteroidDetailsCall(params) {
  return {
    type: AsteroidDetailsActionTypes.ASTEROID_DETAILS,
    params,
  };
}

export function asteroidDetailsSuccess(json) {
  return {
    type: AsteroidDetailsActionTypes.ASTEROID_DETAILS_SUCCESS,
    data: json,
  };
}

export function asteroidDetailsFailure(error) {
  return {
    type: AsteroidDetailsActionTypes.ASTEROID_DETAILS_FAILURE,
    errorMessage: error,
  };
}

export function* asteroidDetailsWorker(action) {
  try {
    const response = yield call(asteroidDetails, action.params);
    yield put(asteroidDetailsSuccess(response));
  } catch (error) {
    put(asteroidDetailsFailure(error.toString()));
  }
}

export function* asteroidDetailsSaga() {
  yield takeLatest(
    AsteroidDetailsActionTypes.ASTEROID_DETAILS,
    asteroidDetailsWorker,
  );
}
