import { v4 as uuidv4 } from 'uuid';
import db from '../../data/db';
import { ITask } from './task.model';

/**
 * Returns array of Tasks or empty
 * @returns array of Tasks Array<ITask> | []
 */
const getAll = () => db.tasks;

/**
 * Returns Task by ID or Throws error, if Task not found in database.
 *@param boardId Board's ID
 *  @param taskId Task's ID
 * @returns Task<ITask>
 */
const getById = (boardId: string, taskId: string) => {
  const task = db.tasks.find(
    (elem) => elem.boardId === boardId && elem.id === taskId
  );
  if (!task) {
    throw new Error(`Task with ID ${taskId} not found`);
  }
  return task;
};

/**
 * Create Task with data from request. Returns new Task.
 * @param boardID Board's ID
 * @param data data from request
 * @returns new Task<ITask>
 */
const create = (boardId: string, data: ITask) => {
  const newId = uuidv4();
  const newTask = {
    id: newId,
    ...data,
    boardId,
  };
  db.tasks.push(newTask as never);
  return newTask;
};

/**
 * Update Task by ID with data.
 * @param boardId Board's ID
 * @param taskId Tasks's ID
 * @param data data for update of a new Task<ITask>
 * @returns updated Task<ITask>
 */
const update = (boardId: string, taskId: string, data: ITask) => {
  const id = taskId;
  db.tasks = db.tasks.map((task) => {
    if (task.id === id) {
      return {
        ...data,
        id,
        boardId,
      };
    }
    return task;
  });
  const task = db.tasks.find((elem) => elem.id === taskId);
  return task;
};

/**
 * Remove Task by ID
 * @taskId id Task's ID
 * @returns message of successfull deletion
 */
const remove = (taskId: string) => {
  const taskToDelete = db.tasks.find((elem) => elem.id === taskId);
  if (!taskToDelete) {
    throw new Error(`Task with ID ${taskId} not found`);
  }
  db.tasks = db.tasks.filter((task) => task.id !== taskId);
  return `task ${taskId} has been removed`;
};

/**
 * Assign null value to userId property, when User is deleted
 * @taskId Task's ID
 * @returns Task<ITask>
 */
const deletedUserCase = (userId: string) => {
  db.tasks = db.tasks.map((task) => {
    if (task.userId !== undefined) {
      if (task.userId === userId) {
        task = { ...task, userId: null as never };
        return task;
      }
    }
    return task;
  });
};

/**
 *Remove Task, when corresponding Board is deleted
 * @boardId Board's ID
 * @returns void
 */
const deleteTasksOfBoard = (boardId: string) => {
  db.tasks = db.tasks.filter((task) => task.boardId !== boardId);
};

export {
  getAll,
  getById,
  create,
  update,
  remove,
  deletedUserCase,
  deleteTasksOfBoard,
};
