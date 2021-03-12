import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoCount}</strong> item(s) left
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
        onClick={(event) => clearCompleted(event)}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
