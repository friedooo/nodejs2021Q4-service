import { ITask } from './task.model';
import {
  getAll,
  getById,
  create,
  update,
  remove,
} from './task.memory.repository';

/**
 * Returns array of Tasks or empty
 * @returns array of Tasks Array<ITask> | []
 */
const getAllTasks = async () => getAll();

/**
 * Returns Task by IDs
 * @param boardId Board's ID
 * @param taskId Tasks's ID
 * @returns Task<ITask>
 */
const getTask = async (boardId: string, taskId: string) =>
  getById(boardId, taskId);

/**
 * Create Task with data from request. Returns new Task.
 * @param boardId Board's ID
 * @param data data from request
 * @returns created Task<ITask>
 */
const createTask = async (boardId: string, data: ITask) =>
  create(boardId, data);

/**
 * Update Task by ID with data. Returns updated Task
 * @param boardId Board's ID
 * @param taskId Task's ID
 * @param data data for update of a new Task<ITask>
 * @returns updated Task<ITask>
 */
const updateTask = async (boardId: string, taskId: string, data: ITask) =>
  update(boardId, taskId, data);

/**
 * Delete Task by ID
 * @param id Task's ID
 * @returns message of successfull deletion
 */
const removeTask = async (taskId: string) => remove(taskId);

export { getAllTasks, getTask, createTask, updateTask, removeTask };
