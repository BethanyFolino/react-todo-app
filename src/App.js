import "./App.css";
import { useEffect, useState } from "react";
import todosList from "./todos.json";
// import { Route } from "react-router-dom";

import TodoList from "./components/TodoList";
// import TodoItem from "./components/TodoItem";
import Footer from "./components/Footer";

function App(props) {
  const [todos, setTodos] = useState(todosList);
  const [userInput, setUserInput] = useState("");

  function handleTodos(e) {
    if (e.keyCode === 13) {
      console.log("You hit the enter key!");
      setTodos([
        ...todos,
        { title: userInput, id: todos.length, completed: false },
      ]);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleTodos);
    return () => {
      window.removeEventListener("keydown", handleTodos);
    };
  }, [userInput]);

  function handleOnChange(e) {
    const newTodo = e.target.value;
    setUserInput(newTodo);
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          onChange={(newTodo) => handleOnChange(newTodo)}
          className="new-todo"
          placeholder="What needs to be done?"
          autofocus
        />
      </header>
      <TodoList todos={todos} />
      <Footer />
      {/* <Route path="/active">
        <ul>
          {props.todos &&
            props.todos
              .filter((items) => items.completed === false)
              .map((todo) => (
                <TodoItem
                  title={todo.title}
                  completed={todo.completed}
                  id={todo.id}
                />
              ))}
        </ul>
      </Route>
      <Route path="/completed">
        {props.todos &&
          props.todos
            .filter((items) => items.completed === true)
            .map((todo) => (
              <TodoItem
                title={todo.title}
                completed={todo.completed}
                id={todo.id}
              />
            ))}
      </Route>
      <Route path="/">
        {props.todos &&
          props.todos.map((todo) => (
            <TodoItem
              title={todo.title}
              completed={todo.completed}
              id={todo.id}
            />
          ))}
      </Route> */}
    </section>
  );
}

export default App;
