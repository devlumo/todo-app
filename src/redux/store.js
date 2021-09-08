import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { todoReducer } from "./todo/todo-reducer";

// import rootReducer from "./root-reducer";

const middleWares = [logger];

const store = createStore(todoReducer, applyMiddleware(...middleWares));

export default store;
