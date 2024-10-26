import { ADD_TODO, EDIT_TODO, DELETE_TODO } from '../constants/todoActionTypes';

const initialState = {
  todos: [], // List of todos/meetings
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload], // Add a new meeting to the state
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload), // Correctly handle the delete action
      };
    default:
      return state;
  }
};

export default todoReducer;
