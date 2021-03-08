function TodoItem(props) {
  return (
    <li className={props.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.completed}
        />
        <label>{props.title}</label>
        <button className="destroy" />
      </div>
    </li>
  );
}

export default TodoItem;
