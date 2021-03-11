import "./App.css";
import { useEffect, useState } from "react";
import todosList from "./todos.json";
import { Route, Switch } from "react-router";
import { v4 as uuidv4 } from "uuid";

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

  const handleOnChange = (e) => {
    let inputText = userInput;
    inputText = e.target.value;
    setUserInput(inputText);
  };
  const keyPress = (e) => {
    if (e.key === "Enter") {
      const todoText = uuidv4();
      const todo = {
        title: userInput,
        completed: false,
        id: todoText,
      };
      setTodos((todos) => [...todos, todo]);
      setUserInput("");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  });

  const deleteTodo = (event, todoId) => {
    setTodos((todos) => {
      return todos.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };
  const toggleComplete = (event, todoId) => {
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
  };
  const clearCompleted = () => {
    setTodos((todos) => {
      return todos.filter((todo) => {
        return !todo.completed;
      });
    });
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          onChange={handleOnChange}
          className="new-todo"
          placeholder="What needs to be done?"
          value={userInput}
          // onChange={(event) => setUserInput(event.target.value)}
          autofocus
        />
      </header>

      <Switch>
        <Route exact path="/active">
          <TodoList
            todos={todos.filter((item) => {
              return item.completed === false;
            })}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </Route>

        <Route path="/completed">
          <TodoList
            todos={todos.filter((item) => {
              return item.completed === true;
            })}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </Route>

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

        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </Switch>

      <Footer
        clearCompleted={clearCompleted}
        todoCount={todos.filter((todo) => !todo.completed).length}
      />
    </section>
  );
}

export default App;
