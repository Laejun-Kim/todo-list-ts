import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Todo from "../../models/todo";

type TodosState = Todo[];

const initialState: TodosState = [];
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      // state.push(...action.payload);
      // state.concat(action.payload);
      // state = action.payload;
      state.splice(0, state.length, ...action.payload);
    },
    addTodos: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
  },
});

export const { setTodos, addTodos } = todosSlice.actions;
export default todosSlice.reducer;
