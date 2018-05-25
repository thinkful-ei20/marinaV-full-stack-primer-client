import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import cheeseReducer from './cheeseReducer';

const rootReducer = combineReducers({
  cheeseReducer,
  form: formReducer
});

export default rootReducer;