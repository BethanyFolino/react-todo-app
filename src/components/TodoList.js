import {
  DELETE_TODO,
  TOGGLE_COMPLETE,
  CLEAR_COMPLETED,
} from "../revisited/TodosReducer";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";

function TodoList(state) {
  return (
    <section className="main">
      <ul className="todo-list">
        {state.todos.map((todo) => (
          <TodoItem
            title={state.userInput}
            completed={state.completed}
            id={uuidv4}
            toggleComplete={TOGGLE_COMPLETE}
            deleteTodo={DELETE_TODO}
            clearCompleted={CLEAR_COMPLETED}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
