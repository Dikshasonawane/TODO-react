import { useState } from "react";

export default function TodoItem({ item, deleteTodo, editTodo, markComplete }) {
  const [isEditing, setEdit] = useState(false);
  const [itemText, setItemText] = useState(item.text);

  function editItem() {
    setEdit(!isEditing);

    // Update parent when isEditing becomes false
    editTodo(item.id, itemText);
  }

  function onInputChange(event) {
    setItemText(event.target.value);
  }

  return (
    <div className={item.isDone ? "done" : ""}>
      <input
        checked={item.isDone}
        type="checkbox"
        onClick={() => markComplete(item.id, !item.isDone)}
      />
      {isEditing ? (
        <input onChange={onInputChange} value={itemText} />
      ) : (
        <label>{item.text}</label>
      )}
      <button onClick={() => deleteTodo(item.id)}>Delete</button>
      <button onClick={editItem}>Edit</button>
    </div>
  );
}
