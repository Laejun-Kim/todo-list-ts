import { nanoid } from "nanoid";

class Todo {
  id: number | string;
  title: string;
  content: string;
  isDone: boolean;

  constructor(title: string, content: string) {
    this.id = nanoid();
    this.content = content;
    this.title = title;
    this.isDone = false;
  }
}

export default Todo;
