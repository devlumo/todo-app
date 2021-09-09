import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { todoReducer } from "./todo/todo-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import rootReducer from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

const middleWares = [logger];

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleWares)
);
export const persistor = persistStore(store);
