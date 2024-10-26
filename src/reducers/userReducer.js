import { CREATE_USER, LOGIN_USER } from '../constants/actionTypes';

const initialState = {
  users: [],
  loggedInUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case LOGIN_USER:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

