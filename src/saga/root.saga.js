import {all} from 'redux-saga/effects';
import {getRandomAsteroidSaga} from '../actions/random.asteroid.actions.js';
import {asteroidDetailsSaga} from '../actions/asteroid.details.actions.js';

function* rootSaga() {
  yield all([getRandomAsteroidSaga(), asteroidDetailsSaga()]);
}

export default rootSaga;
