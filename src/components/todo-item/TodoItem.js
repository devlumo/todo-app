import React from "react";
import "./todo-item.styles.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import TodoEditor from "../todo-editor/TodoEditor";
import { connect } from "react-redux";
import { toggleEditorHidden } from "../../redux/todo/todo.actions";

const TodoItem = ({
  id,
  todo,
  handleDelete,
  complete,
  handleComplete,
  toggleEditorHidden,
  editorToggle,
}) => {
  console.log(todo);
  return (
    <li className="todo-item-container" onClick={() => toggleEditorHidden(id)}>
      {!editorToggle ? (
        <TodoEditor />
      ) : (
        <div className="todo-item">
          <input
            type="checkbox"
            id="checkbox"
            checked={complete}
            onChange={() => handleComplete(id)}
          />
          <span className={`todo-text ${complete ? "complete" : ""}`}>
            {todo}
          </span>
          <button className="delete" onClick={() => handleDelete(id)}>
            <RiDeleteBin5Line />
          </button>
        </div>
      )}
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleEditorHidden: (id) => dispatch(toggleEditorHidden(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
