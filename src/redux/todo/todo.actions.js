export const addTodo = () => ({
  type: "ADD_TODO",
});

export const deleteTodo = (todo) => ({
  type: "DELETE_TODO",
  payload: todo,
});

export const completeTodo = (todo) => ({
  type: "COMPLETE_TODO",
  payload: todo,
});

export const setCurrentInput = (input) => ({
  type: "SET_CURRENT_INPUT",
  payload: input,
});

export const toggleEditorHidden = (id) => ({
  type: "TOGGLE_EDITOR_HIDDEN",
  payload: id,
});

export const changeTodoValue = (input, id) => ({
  type: "CHANGE_TODO_VALUE",
  payload: { input, id },
});
