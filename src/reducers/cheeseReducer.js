import { FETCH_CHEESE_REQUEST, FETCH_CHEESE_SUCCESS, FETCH_CHEESE_ERROR } from '../actions'

const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

export default function cheeseReducer(state = initialState, action) {
  // console.log(action.cheeses);
  if(action.type === FETCH_CHEESE_REQUEST) {
    return {
      ...state,
      loading: true
    }
  }
  if(action.type === FETCH_CHEESE_SUCCESS) {
    console.log('FETCH_CHEESE_SUCCESS dispatched');
    return {
      cheeses: action.cheeses,
      loading: false,
      error: null
    }
  }
  if(action.type === FETCH_CHEESE_ERROR) {
    console.log('FETCH_CHEESE_ERROR dispatched');
    console.log(action.error);
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }

  return state;
}




