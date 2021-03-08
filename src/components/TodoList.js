import TodoItem from './TodoItem'

function TodoList(props) {
  return (
    <section className="main">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <TodoItem title={todo.title} completed={todo.completed} id={todo.id}/>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
