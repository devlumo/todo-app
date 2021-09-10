import React from "react";
import "./todo-editor.styles.scss";
import { connect } from "react-redux";
import { toggleEditorHidden } from "../../redux/todo/todo.actions";

export const TodoEditor = (props) => {
  return (
    <div className="todo-editor">
      <button onClick={() => props.setEditorHidden(props.todo.id)}>
        Close
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setEditorHidden: (id) => dispatch(toggleEditorHidden(id)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);
