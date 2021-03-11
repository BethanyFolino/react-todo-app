function TodoItem(props) {
  return (
    <li className={props.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.completed}
          onChange={(event) => props.toggleComplete(event, props.id)}
        />
        <label>{props.title}</label>
        <button
          onClick={(event) => props.deleteTodo(event, props.id)}
          className="destroy"
        />
      </div>
    </li>
  );
}

export default TodoItem;
