import React from "react";
import "./todo-form.styles.scss";

export default function TodoForm({
  handleSubmit,
  handleChange,
  currentInput,
  handleClear,
}) {
  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          autoComplete="off"
          placeholder="What do you need to do?"
          onChange={handleChange}
          value={currentInput}
          autoFocus
        ></input>
        <div className="form-footer">
          <div className="button-wrapper">
            <button type="reset" className="clear-todo" onClick={handleClear}>
              Cancel
            </button>
            <button
              type="submit"
              className="add-todo"
              disabled={!currentInput.length ? true : false}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
