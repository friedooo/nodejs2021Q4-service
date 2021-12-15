import { Task, ITask } from './task.model';
import { getAll, getById, create } from './task.memory.repository';

const getAllTasks = async (boardId: string) => getAll();

const getTask = async (boardId: string, taskId: string) =>
  getById(boardId, taskId);

const createTask = async (boardId: string, data: ITask) =>
  create(boardId, data);

// const updateTask = async (boardId, taskId, data) =>
//   tasksRepo.updateTask(boardId, taskId, data);

// const removeTask = async (taskId) => tasksRepo.removeTask(taskId);

export { getAllTasks, getTask, createTask };
