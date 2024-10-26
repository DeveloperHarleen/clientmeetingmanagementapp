// src/actions/userActions.js
import { CREATE_USER, LOGIN_USER } from '../constants/actionTypes';

// Action to create a new user
export const createUser = (userData) => {
    return {
        type: CREATE_USER,
        payload: userData, // Pass the user data as the payload
    };
};

// Action to log in a user
export const loginUser = (userData) => {
    return {
        type: LOGIN_USER,
        payload: userData, // Pass the user data as the payload
    };
};
