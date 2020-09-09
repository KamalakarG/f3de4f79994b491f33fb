import RandomAsteroidActionTypes from '../action-types/random.asteroid.action.types.js';

const initialState = {
  randomAsteroids: undefined,
  showSpinner: false,
  error: undefined,
};

const randomAsteroidReducer = (state = initialState, action) => {
  switch (action.type) {
    case RandomAsteroidActionTypes.GET_RANDOM_ASTEROID:
      return {
        ...state,
        showSpinner: true,
        randomAsteroids: undefined,
      };
    case RandomAsteroidActionTypes.GET_RANDOM_ASTEROID_SUCCESS:
      return {
        ...state,
        showSpinner: false,
        randomAsteroids: action.data,
      };
    case RandomAsteroidActionTypes.GET_RANDOM_ASTEROID_FAILURE:
      return {
        ...state,
        showSpinner: false,
        error: action.errorMessage,
      };
    default:
      return state;
  }
};

export default randomAsteroidReducer;
