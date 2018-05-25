import { API_BASE_URL } from '../config';
import {normalizeResponseErrors} from "./utils";

export const ADD_CHEESE_REQUEST = 'ADD_CHEESE_REQUEST';
export const addCheeseRequest = () => {
  return {
    type: ADD_CHEESE_REQUEST
  }
};

export const ADD_CHEESE_SUCCESS = 'ADD_CHEESE_SUCCESS';
export const addCheeseSuccess = (cheeses) => {
  return {
    type: ADD_CHEESE_SUCCESS,
    cheeses
  }
};

export const ADD_CHEESE_ERROR = 'ADD_CHEESE_ERROR';
export const addCheeseError = (error) => {
  return {
    type: ADD_CHEESE_ERROR,
    error
  }
};

export const addCheese = values => dispatch => {
  dispatch(addCheeseRequest());
  return (
    fetch(`${API_BASE_URL}/api/cheeses`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(response => normalizeResponseErrors(response))
    .then(response => response.json())
    .then(cheeses => dispatch(addCheeseSuccess(cheeses)))
    .catch(err => {
      dispatch(addCheeseError(err));
    })
  )
};