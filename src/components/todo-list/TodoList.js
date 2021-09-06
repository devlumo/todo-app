import React, { Component } from "react";
import "./todo-list.styles.scss";
import TodoItem from "../todo-item/TodoItem";
import TodoForm from "../todo-form/TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Howl } from "howler";
import Sound from "../../assets/sounds/navigation_selection-complete-celebration.ogg";

export default class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      currentInput: "",
      todos: [],
      completedTodos: [],
    };

    this.sound = new Howl({
      src: [Sound],
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { id: uuidv4(), todo: this.state.currentInput, complete: false },
      ],
    });
    this.setState({ currentInput: "" });
  };

  handleChange = (e) => {
    this.setState({ currentInput: e.target.value });
  };

  handleDelete = (id) => {
    const newTodoList = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: [...newTodoList],
      completedTodos: [...newTodoList],
    });
  };

  handleComplete = (id) => {
    this.sound.play();
    const currentList = [...this.state.todos];
    const completedItem = currentList.findIndex((item) => item.id === id);
    currentList[completedItem].complete = !currentList[completedItem].complete;
    const completedTodos = currentList.filter((item) => item.complete === true);

    this.setState({ todos: [...currentList], completedTodos: completedTodos });
  };

  handleClear = (e) => {
    e.preventDefault();
    this.setState({ currentInput: "" });
  };

  render() {
    return (
      <div className="todo-list">
        <div className="header">
          <span className="heading">Tasks</span>
          <span className="todo-counter">
            {this.state.completedTodos.length +
              "\n/ " +
              this.state.todos.length}
          </span>
        </div>
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          currentInput={this.state.currentInput}
          handleClear={this.handleClear}
        />

        <ul className="todo-item-list">
          {this.state.todos.map(({ id, todo, complete }) => (
            <TodoItem
              key={id}
              todo={todo}
              id={id}
              complete={complete}
              handleDelete={this.handleDelete}
              handleComplete={this.handleComplete}
            />
          ))}
        </ul>
      </div>
    );
  }
}
