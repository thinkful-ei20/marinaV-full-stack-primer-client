import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheeseRequest = () => {
  return {
    type: FETCH_CHEESE_REQUEST
  }
};

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheeseSuccess = (cheeses) => {
  return {
    type: FETCH_CHEESE_SUCCESS,
    cheeses
  }
};

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheeseError = (error) => {
  return {
    type: FETCH_CHEESE_ERROR,
    error
  }
};

export const fetchCheeseFromApi = () => (dispatch) => {
  dispatch(fetchCheeseRequest());
  return (
    fetch(`${API_BASE_URL}/api/cheeses`)
      .then(response => normalizeResponseErrors(response))
      .then(response => response.json())
      .then(cheeses => dispatch(fetchCheeseSuccess(cheeses)))
      .catch(err => {
        dispatch(fetchCheeseError(err));
      })
  )
};