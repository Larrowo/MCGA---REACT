import { useState } from "react";

import "./App.css";

import Form from "./components/Form";

import TodoItem from "./components/TodoItem";

const App = () => {
  const [todos, setTodos] = useState([
    {
      title: "New todo title",

      completed: false,

      id: Math.floor(Math.random() * 100),
    },
  ]);

  const [completedTodos, setCompleteTodos] = useState([]);

  console.log(todos);

  const addTodo = todo => {
    todo.id = Math.floor(Math.random() * 100);
    todo.completed = false;
    setTodos([...todos, todo]);
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
    console.log(todos.filter(todo => todo.id !== id));
  };

  const completeTodo = id => {
    setCompleteTodos(
      completedTodos.filter(todo =>
        todo.id === id ? (todo.completed = true) : false
      )
    );
    console.log(
      completedTodos.filter(todo =>
        todo.id === id ? (todo.completed = true) : false
      )
    );
  };
  // console.log(todos);

  return (
    <div className="App">
      <Form addTodo={addTodo} />
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}

      {!todos.length && <p>No todos</p>}

      <div>
        {completedTodos.map(todo =>
          todo.completed ? <TodoItem todo={todo} /> : ""
        )}
      </div>
    </div>
  );
};

export default App;
