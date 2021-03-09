import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>0</strong> item(s) left
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
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
