import "./App.css";
import { useEffect, useReducer, createContext } from "react";
import todosList from "./todos.json";
import { Route, Switch } from "react-router";

import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import todosReducer from "./revisited/TodosReducer";

//App
//1. Create context
//2. Initialize useReducer, pass in todos reducer
//3. Initialize state
//4. Use onChange for dispatch
//5. useEffect - submitHandler and eventListeners

//Inside return:
//1. Provider and value to wrap entire return component
//2. In Footer - update a function to use dispatch

//Todos reducer
//1. Switch statement for creating todos, updating, toggling completing
//2. Default should be throw new Error()

//Todo Item
//1. Bring in dispatch and update onChange
export const TodosDispatch = createContext(null);

const App = (props) => {
  const [state, dispatch] = useReducer(todosReducer, {
    todos: todosList,
    userInput: "",
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  const handleKey = (event) => {
    if (event.key === "Enter") {
      dispatch({ type: "ADD_TODO" });
      dispatch({ type: "HANDLE_CHANGE", text: "" });
    }
  };

  return (
    <section className="todoapp">
      <TodosDispatch.Provider value={dispatch}>
        <header className="header">
          <h1>todos</h1>
          <input
            onChange={(event) =>
              dispatch({ type: "HANDLE_CHANGE", text: event.target.value })
            }
            className="new-todo"
            placeholder="What needs to be done?"
            value={state.userInput}
            autoFocus
          />
        </header>

        <Switch>
          <Route exact path="/active">
            <TodoList
              todos={state.todos.filter((item) => {
                return item.completed === false;
              })}
              toggleComplete={(event) => dispatch({ type: "TOGGLE_COMPLETE" })}
              deleteTodo={(event) => dispatch({ type: "DELETE_TODO" })}
            />
          </Route>

          <Route path="/completed">
            <TodoList
              todos={state.todos.filter((item) => {
                return item.completed === true;
              })}
              toggleComplete={(event) => dispatch({ type: "TOGGLE_COMPLETE" })}
              deleteTodo={(event) => dispatch({ type: "DELETE_TODO" })}
            />
          </Route>

          <Route path="/">
            <TodoList
              todos={state.todos}
              toggleComplete={(event) => dispatch({ type: "TOGGLE_COMPLETE" })}
              deleteTodo={(event) => dispatch({ type: "DELETE_TODO" })}
              clearCompleted={(event) => dispatch({ type: "CLEAR_COMPLETED" })}
            />
          </Route>

          <TodoList
            todos={state.todos}
            toggleComplete={(event) => dispatch({ type: "TOGGLE_COMPLETE" })}
            deleteTodo={(event) => dispatch({ type: "DELETE_TODO" })}
          />
        </Switch>

        <Footer
          clearCompleted={(event) => dispatch({ type: "CLEAR_COMPLETED" })}
          todoCount={state.todos.filter((todo) => !todo.completed).length}
        />
      </TodosDispatch.Provider>
    </section>
  );
};

export default App;
