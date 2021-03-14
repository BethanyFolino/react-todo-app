import "./App.css";
import { useEffect, useReducer } from "react";
import todosList from "./todos.json";
import { Route, Switch } from "react-router";
import { v4 as uuidv4 } from "uuid";

import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import todosReducer, {
  DELETE_TODO,
  TOGGLE_COMPLETE,
} from "./revisited/TodosReducer";
import toggleComplete from "./revisited/ToggleComplete";
import deleteTodo from "./revisited/DeleteTodo";

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

const App = () => {
  // const [todos, setTodos] = useState(todosList);
  // const [userInput, setUserInput] = useState("");

  const [state, dispatch] = useReducer(reducer, {
    todos: todosList,
    userInput: "",
  });

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Enter") {
        dispatch({ type: "ADD_TODO" });
        dispatch({ type: "HANDLE_CHANGE" });
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  const handleOnChange = (e) => {
    // let inputText = setTodos;
    // inputText = e.target.value;
    // setTodos(inputText);
    e.preventDefault();
    dispatch({
      type: "newTodo",
      payload: ADD_TODO(title, id, completed),
    });
  };
  const keyPress = (e) => {
    if (e.key === "Enter") {
      const todoText = uuidv4();
      const todo = {
        title: state,
        completed: false,
        id: todoText,
      };
      (todos) => [...todos, todo];
      ("");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  });

  const clearCompleted = () => {
    dispatch((todos) => {
      return todos.filter((todo) => {
        return !todo.completed;
      });
    });
  };
  <TodosDispatch.provider value={dispatch}>
    return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          onChange={handleOnChange}
          className="new-todo"
          placeholder="What needs to be done?"
          value={userInput}
          autofocus
        />
      </header>

      {function reducer(state, action) {
        switch (action.type) {
          case "SHOW_ALL":
            return "ALL";
          case "SHOW_ACTIVE":
            return "ACTIVE";
          case "SHOW_COMPLETED":
            return "COMPLETED";
        }
      }}

      <Switch>
        <Route exact path="/active">
          <TodoList
            todos={todos.filter((item) => {
              return item.completed === false;
            })}
            toggleComplete={TOGGLE_COMPLETE}
            deleteTodo={DELETE_TODO}
          />
        </Route>

        <Route path="/completed">
          <TodoList
            todos={todos.filter((item) => {
              return item.completed === true;
            })}
            toggleComplete={TOGGLE_COMPLETE}
            deleteTodo={DELETE_TODO}
          />
        </Route>

        <Route
          path="/"
          render={
            <TodoList
              todos={todos}
              toggleComplete={TOGGLE_COMPLETE}
              deleteTodo={DELETE_TODO}
              clearCompleted={clearCompleted}
            />
          }
        ></Route>

        <TodoList
          todos={todos}
          toggleComplete={TOGGLE_COMPLETE}
          deleteTodo={DELETE_TODO}
        />
      </Switch>

      <Footer
        clearCompleted={clearCompleted}
        todoCount={todos.filter((todo) => !todo.completed).length}
      />
    </section>
    );
  </TodosDispatch.provider>;
};

export default App;
