const { v4: uuidv4 } = require('uuid');
const db = require('../../data/db');

const getAllTasks = () => db.tasks;

const getTask = (boardId, taskId) => {
  const task = db.tasks.find(
    (elem) => elem.boardId === boardId && elem.id === taskId
  );

  if (!task) {
    throw new Error(`Task with ID ${taskId} not found`);
  }
  return task;
};

const createTask = (boardId, data) => {
  const { title, order, description, userId, columnId } = data;
  const newTask = {
    id: uuidv4(),
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  };

  db.tasks = [...db.tasks, newTask];

  return newTask;
};

const updateTask = (boardId, taskId, data) => {
  const id = taskId;
  db.tasks = db.tasks.map((task) => {
    if (task.id === id) {
      return {
        ...data,
        id: taskId,
        boardId,
      };
    }
    return task;
  });
  const task = db.tasks.find((elem) => elem.id === taskId);
  return task;
};

const removeTask = (taskId) => {
  const taskToDelete = db.tasks.find((elem) => elem.id === taskId);
  if (!taskToDelete) {
    throw new Error(`Task with ID ${taskId} not found`);
  }
  db.tasks = db.tasks.filter((task) => task.id !== taskId);
  return `task ${taskId} has been removed`;
};

const deletedUserCase = (userId) => {
  db.tasks = db.tasks.map((task) => {
    if (task.userId !== undefined) {
      if (task.userId === userId) {
        task = { ...task, userId: null };
        return task;
      }
    }
    return task;
  });
};

const deleteTasksOfBoard = (boardId) => {
  db.tasks = db.tasks.filter((task) => task.boardId !== boardId);
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  removeTask,
  deletedUserCase,
  deleteTasksOfBoard,
};
