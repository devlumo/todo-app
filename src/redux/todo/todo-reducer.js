import { v4 as uuidv4 } from "uuid";
import { completeTodo, toggleEditor, updateTodoValue } from "./todo.utils";

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
          {
            id: uuidv4(),
            todoText: state.currentInput,
            complete: false,
            toggleEditorHidden: true,
          },
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

    case "TOGGLE_EDITOR_HIDDEN":
      return {
        ...state,
        todos: toggleEditor(state.todos, action.payload),
      };

    case "SET_EDITOR_INPUT":
      return {
        ...state,
        editorInput: action.payload,
      };

    case "CHANGE_TODO_VALUE":
      return {
        ...state,
        todos: updateTodoValue(state.todos, action.payload),
      };

    default:
      return state;
  }
};
