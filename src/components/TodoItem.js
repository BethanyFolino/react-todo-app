function TodoItem() {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={(event) => toggleComplete(event, id)}
        />
        <label>{todo.title}</label>
        <button
          onClick={(event) => deleteTodo(event, id)}
          className="destroy"
        />
      </div>
    </li>
  );
}

export default TodoItem;
