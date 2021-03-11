import "./App.css";
import { useEffect, useState } from "react";
import todosList from "./todos.json";
import { Route, Switch } from "react-router";

import TodoList from "./components/TodoList";
// import TodoItem from "./components/TodoItem";
import Footer from "./components/Footer";

function App(props) {
  const [todos, setTodos] = useState(todosList);
  const [userInput, setUserInput] = useState("");
  // const [filter, setFilter] = useState(false);

  useEffect(() => {
    const handleKey = (event) => {
      if (userInput && event.key === "Enter") {
        let newTodo = {
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          title: userInput,
          completed: false,
        };
        setTodos((todos) => [...todos, newTodo]);
        setUserInput(() => "");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  function handleOnChange(e) {
    const newTodo = e.target.value;
    setUserInput(newTodo);
  }

  useEffect(() => {
    window.addEventListener("click", toggleComplete);
    return () => {
      window.removeEventListener("click", toggleComplete);
    };
  });

  function deleteTodo(event, todoId) {
    let changeTodos = [...todos];
    changeTodos.splice(
      changeTodos.findIndex((todo) => todo.id === todoId),
      1
    );

    setTodos([...changeTodos]);
  }
  function toggleComplete(event, todoId) {
    // let changeTodos = [...todos];
    // let changeTodo = changeTodos.find((todo) => todo.id === todoId);
    // changeTodo.completed = !changeTodo.completed;
    // setTodos([...changeTodos]);
    console.log("You clicked me!");
    setTodos((todos) => {
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
  }
  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          onChange={(newTodo) => handleOnChange(newTodo)}
          className="new-todo"
          placeholder="What needs to be done?"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          autofocus
        />
      </header>

      <Switch>
        <Route
          exact
          path="/active"
          render={(props) => (
            <TodoList
              {...props}
              todos={todos.filter((todo) => !todo.completed)}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              clearCompleted={clearCompleted}
            />
          )}
        />
        <Route
          path="/completed"
          render={(props) => (
            <TodoList
              {...props}
              todos={todos.filter((todo) => todo.completed)}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              clearCompleted={clearCompleted}
            />
          )}
        />
        <Route
          path="/"
          render={(props) => (
            <TodoList
              {...props}
              todos={todos}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              clearCompleted={clearCompleted}
            />
          )}
        />
      </Switch>
      <Footer
        todoCount={todos.filter((todo) => !todo.completed).length}
        clearCompleted={clearCompleted}
      />
    </section>
  );
}

export default App;
