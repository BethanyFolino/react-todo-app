import { useContext } from "react";
import { TodosDispatch } from "../App";
import { DELETE_TODO, TOGGLE_COMPLETE } from "../revisited/TodosReducer";

function TodoItem(props) {
  const dispatch = useContext(TodosDispatch);
  return (
    <li className={props.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.completed}
          onChange={(event) => dispatch({ type: TOGGLE_COMPLETE })}
        />
        <label>{props.todo.title}</label>
        <button
          onClick={(event) => dispatch({ type: DELETE_TODO })}
          className="destroy"
        />
      </div>
    </li>
  );
}

export default TodoItem;
