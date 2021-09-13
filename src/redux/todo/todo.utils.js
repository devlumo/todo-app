export const completeTodo = (currentList, id) => {
  const completedItem = currentList.findIndex((item) => item.id === id);
  currentList[completedItem].complete = !currentList[completedItem].complete;
  return [...currentList];
};

export const toggleEditor = (currentList, id) => {
  const editorItem = currentList.findIndex((item) => item.id === id);
  // console.log(editorItem);
  currentList[editorItem].toggleEditorHidden =
    !currentList[editorItem].toggleEditorHidden;
  return [...currentList];
};

export const updateTodoValue = (currentList, payload) => {
  const { input, id } = payload;
  const updateItem = currentList.findIndex((item) => item.id === id);
  currentList[updateItem].todoText = input;
  return [...currentList];
};
