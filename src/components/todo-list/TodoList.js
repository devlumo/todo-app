import React, { Component } from "react";
import "./todo-list.styles.scss";
import TodoItem from "../todo-item/TodoItem";
import TodoForm from "../todo-form/TodoForm";
import { Howl } from "howler";
import Sound from "../../assets/sounds/navigation_selection-complete-celebration.ogg";
import {
  setCurrentInput,
  addTodo,
  completeTodo,
  deleteTodo,
} from "../../redux/todo/todo.actions";
import { connect } from "react-redux";

class TodoList extends Component {
  constructor() {
    super();

    this.sound = new Howl({
      src: [Sound],
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo();
    this.props.setCurrentInput("");
  };

  handleChange = (e) => {
    this.props.setCurrentInput(e.target.value);
  };

  handleDelete = (id) => {
    const newTodoList = this.props.todos.filter((todo) => todo.id !== id);
    this.props.deleteTodo(newTodoList);
  };

  handleComplete = async (id) => {
    await this.props.completeTodo(id);
    const itemComplete = this.props.completedTodos.find(
      (item) => item.id === id
    );

    // don't play the sound if the item is being uncompleted
    if (itemComplete) {
      this.sound.play();
    }
  };

  handleClear = (e) => {
    e.preventDefault();
    this.props.setCurrentInput("");
  };

  render() {
    return (
      <div className="container">
        <div className="left-section">
          <div className="todo-list">
            <div className="header">
              <span className="heading">Tasks</span>
              <span className="todo-counter">
                {this.props.completedTodos.length +
                  "\n/ " +
                  this.props.todos.length}
              </span>
            </div>
            <TodoForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              currentInput={this.props.currentInput}
              handleClear={this.handleClear}
            />
          </div>
        </div>
        <div className="right-section">
          <div className="items-container">
            <ul className="todo-item-list">
              {this.props.todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  handleDelete={this.handleDelete}
                  handleComplete={this.handleComplete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  addTodo: () => dispatch(addTodo()),
  deleteTodo: (newTodoList) => dispatch(deleteTodo(newTodoList)),
  completeTodo: (id) => dispatch(completeTodo(id)),
  setCurrentInput: (input) => dispatch(setCurrentInput(input)),
});

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    completedTodos: state.completedTodos,
    currentInput: state.currentInput,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
