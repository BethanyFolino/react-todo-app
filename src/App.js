import "./App.css";
import { useEffect, useReducer, createContext } from "react";
import todosList from "./todos.json";
import { Route, Switch } from "react-router";
// import { v4 as uuidv4 } from "uuid";

import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import todosReducer, {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETE,
  CLEAR_COMPLETED,
  HANDLE_CHANGE,
} from "./revisited/TodosReducer";

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
  // const [todos, setTodos] = useState(todosList);
  // const [userInput, setUserInput] = useState("");

  const [state, dispatch] = useReducer(todosReducer, {
    todos: todosList,
    userInput: "",
  });

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Enter") {
        dispatch({ type: ADD_TODO });
        dispatch({ type: HANDLE_CHANGE });
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  // const handleOnChange = (e) => {
  //   // let inputText = setTodos;
  //   // inputText = e.target.value;
  //   // setTodos(inputText);
  //   e.preventDefault();
  //   dispatch({
  //     type: "ADD_TODO",
  //   });
  //   dispatch({ type: HANDLE_CHANGE });
  // };
  const keyPress = (e) => {
    if (e.key === "Enter") {
      // const todoText = uuidv4();
      // const todo = {
      //   title: state,
      //   completed: false,
      //   id: todoText,
      // };
      dispatch({ type: ADD_TODO });
      dispatch({ type: HANDLE_CHANGE, text: "" });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  });

  // const clearCompleted = () => {
  //   dispatch((todos) => {
  //     return todos.filter((todo) => {
  //       return !todo.completed;
  //     });
  //   });
  // };
  return (
    <section className="todoapp">
      <TodosDispatch.Provider value={dispatch}>
        <header className="header">
          <h1>todos</h1>
          <input
            onChange={HANDLE_CHANGE}
            className="new-todo"
            placeholder="What needs to be done?"
            value={useReducer.userInput}
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
            default:
              throw new Error();
          }
        }}

        <Switch>
          <Route exact path="/active">
            <TodoList
              todos={state.todos.filter((item) => {
                return item.completed === false;
              })}
              toggleComplete={TOGGLE_COMPLETE}
              deleteTodo={DELETE_TODO}
            />
          </Route>

          <Route path="/completed">
            <TodoList
              todos={state.todos.filter((item) => {
                return item.completed === true;
              })}
              toggleComplete={TOGGLE_COMPLETE}
              deleteTodo={DELETE_TODO}
            />
          </Route>

          <Route path="/">
            <TodoList
              todos={useReducer.userInput}
              toggleComplete={TOGGLE_COMPLETE}
              deleteTodo={DELETE_TODO}
              clearCompleted={CLEAR_COMPLETED}
            />
          </Route>

          <TodoList
            todos={useReducer.todos}
            toggleComplete={TOGGLE_COMPLETE}
            deleteTodo={DELETE_TODO}
          />
        </Switch>

        <Footer
          clearCompleted={CLEAR_COMPLETED}
          todoCount={state.todos.filter((todo) => !todo.completed).length}
        />
      </TodosDispatch.Provider>
    </section>
  );
};

export default App;
