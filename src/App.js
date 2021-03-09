import "./App.css";
import { useState } from "react";
import todosList from "./todos.json";
import { Route } from "react-router-dom";

import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState(todosList);
  const [userInputs, setUserInputs] = useState(todosList);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          // onChange={function that updates user's input in state}
          className="new-todo"
          placeholder="What needs to be done?"
          autofocus
        />
      </header>
      <TodoList todos={todos} />
      <Footer />
      <Route path="/active"></Route>
      <Route path="/completed"></Route>
      <Route path="/"></Route>
    </section>
  );
}

export default App;
