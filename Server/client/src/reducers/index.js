import { combineReducers } from 'redux';
import authReducer from './authReducer';

//The passed in object's keys represent the keys that 
//exist inside the state object.
export default combineReducers({
  auth: authReducer
})
