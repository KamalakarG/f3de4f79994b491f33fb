import axios from 'axios';
import {ASTEROID_DETAILS, NASA_API_KEY} from '../utils/constants.js';

export const asteroidDetails = (params) => {
  let urlStr = `${ASTEROID_DETAILS}${params}?api_key=${NASA_API_KEY}`;
  return axios({
    method: 'GET',
    url: urlStr,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
};
