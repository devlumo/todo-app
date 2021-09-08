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
