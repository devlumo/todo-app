import React from "react";
import "./todo-editor.styles.scss";
import { connect } from "react-redux";
import {
  toggleEditorHidden,
  changeTodoValue,
} from "../../redux/todo/todo.actions";

import { motion } from "framer-motion";

export const TodoEditor = (props) => {
  return (
    <motion.div className="todo-editor" animate={{ height: 1 }}>
      <input
        type="text"
        defaultValue={props.todo.todoText}
        onChange={(e) =>
          props.handleEditorChange(e.target.value, props.todo.id)
        }
      />
      <button onClick={() => props.setEditorHidden(props.todo.id)}>Done</button>
    </motion.div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setEditorHidden: (id) => dispatch(toggleEditorHidden(id)),
  handleEditorChange: (input, id) => dispatch(changeTodoValue(input, id)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);
