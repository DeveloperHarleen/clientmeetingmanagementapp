// src/actions/todoActions.js
import { ADD_TODO, EDIT_TODO, DELETE_TODO } from '../constants/todoActionTypes';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const editTodo = (todo) => ({
  type: EDIT_TODO,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id, // Ensure this is correct
});
