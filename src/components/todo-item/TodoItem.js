import React from "react";
import "./todo-item.styles.scss";
import { RiDeleteBin5Line } from "react-icons/ri";

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
        id="checkbox"
        checked={complete}
        onChange={() => handleComplete(id)}
      />
      <span className={`todo-text ${complete ? "complete" : ""}`}>{todo}</span>
      <button className="delete" onClick={() => handleDelete(id)}>
        <RiDeleteBin5Line />
      </button>
    </li>
  );
}
