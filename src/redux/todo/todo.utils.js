export const completeTodo = (currentList, id) => {
  const completedItem = currentList.findIndex((item) => item.id === id);
  currentList[completedItem].complete = !currentList[completedItem].complete;
  return [...currentList];
};
