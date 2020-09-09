import {combineReducers} from 'redux';
import randomAsteroidReducer from './random.asteroid.reducer.js';
import asteroidDetailsReducer from './asteroid.details.reducer';

const rootReducer = combineReducers({
  randomAsteroidReducer,
  asteroidDetailsReducer,
});

export default rootReducer;
