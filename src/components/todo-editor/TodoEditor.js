import React from "react";
import "./todo-editor.styles.scss";
import { connect } from "react-redux";
import {
  toggleEditorHidden,
  changeTodoValue,
} from "../../redux/todo/todo.actions";

export const TodoEditor = (props) => {
  return (
    <div className="todo-editor">
      <input
        type="text"
        defaultValue={props.todo.todoText}
        onChange={(e) =>
          props.handleEditorChange(e.target.value, props.todo.id)
        }
      />
      <button onClick={() => props.setEditorHidden(props.todo.id)}>Done</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setEditorHidden: (id) => dispatch(toggleEditorHidden(id)),
  handleEditorChange: (input, id) => dispatch(changeTodoValue(input, id)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);
