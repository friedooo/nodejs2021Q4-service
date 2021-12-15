import { v4 as uuidv4 } from 'uuid';

interface ITask {
  id?: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string | null;
  columnId: string | null;
}
class Task implements ITask {
  id?: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string | null;
  columnId: string | null;

  constructor(
    id: string,
    title: string,
    order: number,
    description: string,
    userId: string | null,
    boardId: string | null,
    columnId: string | null
  ) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  // static fromRequest(body: ITask) {
  //   return new Task(body);
  // }
}

export { Task, ITask };
