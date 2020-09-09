import AsteroidDetailsActionTypes from '../action-types/asteroid.details.action.types.js';

const initialState = {
  asteroidDetails: undefined,
  showSpinner: false,
  error: undefined,
};

const asteroidDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AsteroidDetailsActionTypes.ASTEROID_DETAILS:
      return {
        ...state,
        showSpinner: true,
        asteroidDetails: undefined,
      };
    case AsteroidDetailsActionTypes.ASTEROID_DETAILS_SUCCESS:
      return {
        ...state,
        showSpinner: false,
        asteroidDetails: action.data,
      };
    case AsteroidDetailsActionTypes.ASTEROID_DETAILS_FAILURE:
      return {
        ...state,
        showSpinner: false,
        error: action.errorMessage,
      };
    default:
      return state;
  }
};

export default asteroidDetailsReducer;
