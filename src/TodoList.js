import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  todoList,
  editTodo,
  deleteTodo,
  markComplete
}) {
  return todoList.map((item) => (
    <TodoItem
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      markComplete={markComplete}
      item={item}
    />
  ));
}
