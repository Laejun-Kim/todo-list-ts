import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Todo from "../../models/todo";

type TodosState = Todo[];
const initialState: TodosState = [];
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      return (state = action.payload);
    },
  },
});

export const { setTodos } = todosSlice.actions;
export default todosSlice.reducer;
