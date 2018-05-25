import { FETCH_CHEESE_REQUEST, FETCH_CHEESE_SUCCESS, FETCH_CHEESE_ERROR } from '../actions'
import { ADD_CHEESE_REQUEST, ADD_CHEESE_SUCCESS, ADD_CHEESE_ERROR } from '../actions/add-cheese'

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
    console.log('ACTION CHEESES', action.cheeses);
    return {
      cheeses: action.cheeses.map(cheese => cheese.type),
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
  if(action.type === ADD_CHEESE_REQUEST) {
    return {
      ...state,
      loading: true
    }
  }
  if(action.type === ADD_CHEESE_SUCCESS) {
    console.log('ADD_CHEESE_SUCCESS dispatched');
    console.log(action.cheeses);
    return {
      cheeses: [...state.cheeses, action.cheeses.type],
      loading: false,
      error: null
    }
  }
  if(action.type === ADD_CHEESE_ERROR) {
    console.log(action.error);
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }


  return state;
}




