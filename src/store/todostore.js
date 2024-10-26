// src/todostore.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Middleware for handling async actions
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from './reducers/todoreducer'; // Import the reducer for todos

// Create a store specifically for managing todos
const todoStore = createStore(
  todoReducer, // Use the todoReducer to manage the todo state
  composeWithDevTools(applyMiddleware(thunk)) // Apply middleware for async actions and enable Redux DevTools
);

export default todoStore;
