import { v4 as uuidv4 } from "uuid";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const HANDLE_CHANGE = "HANDLE_CHANGE";

export default function todosReducer(state, action) {
  switch (action.type) {
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action) {
            let toggleFeature = {
              ...todo,
            };
            toggleFeature.completed = !toggleFeature.completed;
            return toggleFeature;
          }
          return todo;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todos) => {
          return todos.filter((todo) => {
            return todo.id !== action;
          });
        }),
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map,
          { id: uuidv4(), title: state.userInput, completed: false },
        ],
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: [
          ...state.todos.map((todos) => {
            return todos.filter((todo) => {
              return !todo.completed;
            });
          }),
        ],
      };
    case HANDLE_CHANGE:
      return { ...state, userInput: action.text };
    default:
      throw new Error();
  }
}
