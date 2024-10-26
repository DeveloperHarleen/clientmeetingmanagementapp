// src/reducers/userReducer.js
import { CREATE_USER, UPDATE_USER } from '../constants/actionTypes';

const initialState = {
  users: [], // Initial state for users
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload], // Add new user to the state
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user // Update the user with new data
        ),
      };
    default:
      return state; // Return the current state by default
  }
};

export default userReducer;





