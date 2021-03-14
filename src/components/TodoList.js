import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <section className="main">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <TodoItem
            title={props.todo.title}
            completed={props.todo.completed}
            id={props.todo.id}
            toggleComplete={props.toggleComplete}
            deleteTodo={props.deleteTodo}
            clearCompleted={props.clearCompleted}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
