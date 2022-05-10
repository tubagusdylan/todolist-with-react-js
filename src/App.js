import React, { useState } from "react";
import "./style/background.css";
import Header from "./components/Header";
import InputToDo from "./components/InputToDo";
import ListToDo from "./components/ListToDo";

function App() {
  const [todos, setTodos] = useState([]);

  const eventCreateTodo = (todo) => {
    setTodos(todos.concat(todo));
  };

  const eventEditTodo = (todo) => {
    setTodos(todo);
  };

  const eventDeleteTodo = (todo) => {
    setTodos(todo);
  };

  const eventDoneTodo = (todo) => {
    setTodos(todo);
  };

  return (
    <div className="background">
      <div className="container">
        <Header>TODO</Header>
        <InputToDo createToDo={eventCreateTodo} dataToDo={todos} deleteToDo={eventDeleteTodo} eventEditTodo={eventEditTodo} eventDoneTodo={eventDoneTodo} />
      </div>
    </div>
  );
}

export default App;
