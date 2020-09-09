import axios from 'axios';
import {GET_RANDOM_ASTEROID} from '../utils/constants.js';

export const getRandomAsteroid = () => {
  return axios({
    method: 'GET',
    url: GET_RANDOM_ASTEROID,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
};
