import { useState } from "react";
import TodoList from "./TodoList";
import "./styles.css";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodos] = useState([
    { text: "Onion", id: "onion", isDone: true },
    { text: "Pudina", id: "pudina", isDone: false }
  ]);

  function markComplete(id, done) {
    const todo = todoList.find(({ id: todoId }) => id === todoId);
    todo.isDone = done;
    // Why is this need?
    setTodos([...todoList]); // Why?
  }

  function handleChange(event) {
    setTodoText(event.target.value);
  }

  function createTodo(event) {
    event.preventDefault();
    setTodos([
      ...todoList,
      {
        id: Math.random(),
        text: todoText,
        isDone: false
      }
    ]);
    setTodoText("");
  }

  function deleteTodo(id) {
    const index = todoList.findIndex(({ id: itemId }) => itemId === id);
    todoList.splice(index, 1);
    setTodos([...todoList]);
  }

  function editTodo(id, newItemText) {
    const todo = todoList.find(({ id: itemId }) => id === itemId);
    todo.text = newItemText;
    setTodos([...todoList]);
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <h2>Start adding, editing and removing todos!</h2>
      <div>
        Create a todo item:
        <form onSubmit={createTodo}>
          <input value={todoText} onChange={handleChange} />
          <button type="submit">Create</button>
        </form>
      </div>
      <TodoList
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        markComplete={markComplete}
        todoList={todoList}
      />
      {/* <TodoList /> */}
      {/* multiple <TodoItem />s */}
      {/* CRUD - Create, Read, Update & Delete */}
    </div>
  );
}
