import { useContext } from "react";
import { TodosDispatch } from "../App";
// import todosList from "../todos.json";

function TodoItem(props) {
  const dispatch = useContext(TodosDispatch);
  return (
    <li className={props.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.completed}
          onChange={(event) =>
            dispatch({ type: "TOGGLE_COMPLETE", todoId: props.id })
          }
        />
        <label>{props.title}</label>
        <button
          onClick={(event) =>
            dispatch({ type: "DELETE_TODO", todoId: props.id })
          }
          className="destroy"
        />
      </div>
    </li>
  );
}

export default TodoItem;
