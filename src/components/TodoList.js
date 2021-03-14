import {
  DELETE_TODO,
  TOGGLE_COMPLETE,
  CLEAR_COMPLETED,
} from "../revisited/TodosReducer";
import todosReducer from "../revisited/TodosReducer";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";
// import { TodosDispatch } from "../App";
import { useReducer } from "react";
import todosList from "../todos.json";

function TodoList(props) {
  // const dispatch = useContext(TodosDispatch);
  const [state, dispatch] = useReducer(todosReducer, {
    todos: todosList,
    userInput: "",
  });
  return (
    <section className="main">
      <ul className="todo-list">
        {state.todos.map((todo) => (
          <TodoItem
            title={state.todos}
            completed={state.todos.completed}
            id={uuidv4}
            toggleComplete={(event) => dispatch({ type: TOGGLE_COMPLETE })}
            deleteTodo={(event) => dispatch({ type: DELETE_TODO })}
            clearCompleted={(event) => dispatch({ type: CLEAR_COMPLETED })}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
