import "./App.css";
import { useState } from "react";
import todosList from "./todos.json";

import TodoList from "./components/TodoList"
import Footer from "./components/Footer"

function App() {
  const [todos, setTodos] = useState(todosList);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autofocus
        />
      </header>
      <TodoList todos={todos} />
      <Footer/>
    </section>
  );
}

export default App;
