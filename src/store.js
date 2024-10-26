// src/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Middleware for async actions
import { composeWithDevTools } from 'redux-devtools-extension'; // DevTools extension
import userReducer from './reducers/userReducer'; // Ensure path to your reducer is correct
import todoReducer from './reducers/todoreducer'; // Import the todo reducer

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer, // Example reducer for users
  todos: todoReducer, // Add the todo reducer
});

// Create store with middleware and DevTools extension
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Apply middleware and enable Redux DevTools
);

export default store;