import "./App.css";
import { useEffect, useReducer } from "react";
import todosList from "./todos.json";
import { Route, Switch } from "react-router";
import { v4 as uuidv4 } from "uuid";

import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

// function reducer(state, action) {   *use as if/else in return
//   switch (action.type) {
//     case "SHOW_ALL":
//       return "ALL";
//     case "SHOW_ACTIVE":
//       return "ACTIVE";
//     case "SHOW_COMPLETED":
//       return "COMPLETED";
//   }
// }
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

const App = () => {
  // const [todos, setTodos] = useState(todosList);
  // const [userInput, setUserInput] = useState("");
  const [todos, dispatch] = useReducer(dispatch, "ALL");

  useEffect(() => {
    const handleKey = (event) => {
      if (userInput && event.key === "Enter") {
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
    let inputText = setTodos;
    inputText = e.target.value;
    setTodos(inputText);
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
    dispatch((todos) => {
      return todos.filter((todo) => {
        return !todo.completed;
      });
    });
  };
  <dispatch.provider>
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
          render={
            <TodoList
              todos={todos}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              clearCompleted={clearCompleted}
            />
          }
        ></Route>

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
  </dispatch.provider>;
};

export default App;
