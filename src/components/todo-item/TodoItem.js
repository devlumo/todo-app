import React from "react";
import "./todo-item.styles.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import TodoEditor from "../todo-editor/TodoEditor";
import { connect } from "react-redux";
import { toggleEditorHidden } from "../../redux/todo/todo.actions";
import { motion } from "framer-motion";

const TodoItem = (props) => {
  const currentTodo = props.todos.find((item) => item.id === props.id);
  const { id, complete, todoText } = currentTodo;
  return (
    <motion.li
      className="todo-item-container"
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={{ duration: 0.3 }}
    >
      {!currentTodo.toggleEditorHidden ? (
        <TodoEditor todo={currentTodo} />
      ) : (
        <div className="todo-item">
          <input
            type="checkbox"
            id="checkbox"
            checked={complete}
            onChange={() => props.handleComplete(id)}
          />
          <span
            onClick={() => props.setEditorHidden(id)}
            className={`todo-text ${complete ? "complete" : ""}`}
          >
            {todoText}
          </span>
          <button className="delete" onClick={() => props.handleDelete(id)}>
            <RiDeleteBin5Line />
          </button>
        </div>
      )}
    </motion.li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setEditorHidden: (id) => dispatch(toggleEditorHidden(id)),
});

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
