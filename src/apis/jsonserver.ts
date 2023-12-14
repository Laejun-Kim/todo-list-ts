import axios from "axios";
import Todo from "../models/todo";

// type Todo = {
//   id: number;
//   title: string;
//   content: string;
//   isDone: boolean;
// };

export const getTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
  return response.data;
};

export const addTodo = async (newTodo: Todo) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};

const toggleTodo = (id: string) => {};

const deleteTodo = (id: string) => {};
