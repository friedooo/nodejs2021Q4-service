import { ITask } from './task.model';
import {
  getAll,
  getById,
  create,
  update,
  remove,
} from './task.memory.repository';

const getAllTasks = async () => getAll();

const getTask = async (boardId: string, taskId: string) =>
  getById(boardId, taskId);

const createTask = async (boardId: string, data: ITask) =>
  create(boardId, data);

const updateTask = async (boardId: string, taskId: string, data: ITask) =>
  update(boardId, taskId, data);

const removeTask = async (taskId: string) => remove(taskId);

export { getAllTasks, getTask, createTask, updateTask, removeTask };
