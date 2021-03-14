import { Link } from "react-router-dom";
import { CLEAR_COMPLETED } from "../revisited/TodosReducer";
import { useContext } from "react";
import { TodosDispatch } from "../App";

function Footer(props) {
  const dispatch = useContext(TodosDispatch);
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.todoCount}</strong> item(s) left
      </span>
      <ul className="filters">
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/active">Active</Link>
        </li>
        <li>
          <Link to="/completed">Completed</Link>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick={(event) => dispatch({ type: CLEAR_COMPLETED })}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
