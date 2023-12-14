import axios from "axios";
import Todo from "../models/todo";

export const getTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
  return response.data;
};

export const addTodo = async (newTodo: Todo) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};

interface ToggleTodoParams {
  id: string | number;
  isDone: boolean;
}

export const toggleTodo = ({ id, isDone }: ToggleTodoParams) => {
  return axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`, {
    isDone: !isDone,
  });
};

export const deleteTodo = (id: string | number) => {
  return axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
};
