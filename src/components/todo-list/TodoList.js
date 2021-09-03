import React, { Component } from "react";
import "./todo-list.styles.scss";
import TodoItem from "../todo-item/TodoItem";
import { v4 as uuidv4 } from "uuid";

export default class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      currentInput: "",
      todos: [],
    };
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
  s;

  handleDelete = (id) => {
    const newTodoList = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: [...newTodoList] });
  };

  handleComplete = (id) => {
    const currentList = [...this.state.todos];
    const completedItem = currentList.findIndex((item) => item.id === id);
    currentList[completedItem].complete = !currentList[completedItem].complete;

    this.setState({ todos: [...currentList] });
  };

  render() {
    return (
      <div className="todo-list">
        <h4>Todo List</h4>
        <form onSubmit={this.handleSubmit}>
          <label>Enter a Todo</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Buy milk..."
            onChange={this.handleChange}
            value={this.state.currentInput}
          ></input>
          <button type="submit">Add</button>
        </form>

        <ul>
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
