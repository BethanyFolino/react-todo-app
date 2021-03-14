export default function deleteTodo(dispatch, todoId) {
  dispatch((todos) => {
    return todos.filter((todo) => {
      return todo.id !== todoId;
    });
  });
}
