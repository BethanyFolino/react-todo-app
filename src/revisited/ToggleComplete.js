const toggleComplete = (dispatch, todoId) => {
  dispatch((todos) => {
    return todos.map((todo) => {
      if (todo.id === todoId) {
        let toggleFeature = {
          ...todo,
        };
        toggleFeature.completed = !toggleFeature.completed;
        return toggleFeature;
      }
      return todo;
    });
  });
};
