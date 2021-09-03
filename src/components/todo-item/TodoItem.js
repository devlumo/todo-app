import React from "react";
import "./todo-item.styles.scss";

export default function TodoItem({
  id,
  todo,
  handleDelete,
  complete,
  handleComplete,
}) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={complete}
        onChange={() => handleComplete(id)}
      />
      <span className={`todo-text ${complete ? "complete" : ""}`}>{todo}</span>{" "}
      <button onClick={() => handleDelete(id)}>X</button>
    </li>
  );
}
