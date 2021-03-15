import { v4 as uuidv4 } from "uuid";

export default function todosReducer(state, action) {
  const ADD_TODO = "ADD_TODO";
  const DELETE_TODO = "DELETE_TODO";
  const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
  const CLEAR_COMPLETED = "CLEAR_COMPLETED";
  const HANDLE_CHANGE = "HANDLE_CHANGE";
  switch (action.type) {
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.todoId) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else return todo;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.todoId),
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: uuidv4(), title: state.userInput, completed: false },
        ],
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo) => {
            return !todo.completed;
          }),
        ],
      };
    case HANDLE_CHANGE:
      return { ...state, userInput: action.text };
    default:
      throw new Error();
  }
}
