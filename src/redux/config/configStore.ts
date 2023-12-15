import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../modules/todosSlice";

const store = configureStore({
  reducer: { todos: todosReducer },
});
//ts관련
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
