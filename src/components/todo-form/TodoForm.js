import React from "react";
import "./todo-form.styles.scss";

export default function TodoForm({ handleSubmit, handleChange, currentInput }) {
  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <label>Enter a Todo</label>
        <input
          type="text"
          autoComplete="off"
          placeholder="Buy milk..."
          onChange={handleChange}
          value={currentInput}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
