export default function todosReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_COMPLETE":
      return "COMPLETE";
    case "DELETE_TODO":
      return "DELETE";
    case "ADD_TODO":
      return "ADD";
    default:
      throw new Error();
  }
}
