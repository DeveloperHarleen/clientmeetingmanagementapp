// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';  // Import your reducers

const rootReducer = combineReducers({
  auth: authReducer,
  // add other reducers here
});

export default rootReducer;
