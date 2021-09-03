import React, { Component } from "react";
import TodoList from "./components/todo-list/TodoList";
import "./App.styles.scss";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}
