import { v4 as uuidv4 } from "uuid";
import { completeTodo } from "./todo.utils";

const INITIAL_STATE = {
  currentInput: "",
  todos: [],
  completedTodos: [],
};

export const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: uuidv4(), todo: state.currentInput, complete: false },
        ],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: [...action.payload],
        completedTodos: [...action.payload],
      };

    case "COMPLETE_TODO":
      const completedList = completeTodo(state.todos, action.payload);
      return {
        ...state,
        todos: completedList,
        completedTodos: completedList.filter((item) => item.complete === true),
      };

    case "SET_CURRENT_INPUT":
      return {
        ...state,
        currentInput: action.payload,
      };

    default:
      return state;
  }
};
