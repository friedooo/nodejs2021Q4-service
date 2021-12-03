const { v4: uuidv4 } = require('uuid');
const db = require('../../../data/db');

const getAllTasks = (boardId) => db.tasks; // Вариант для тестов
// db.tasks.filter((task) => task.boardId === boardId); // Более правильный вариант

const getTask = (boardId, taskId) => {
  const task = db.tasks.find(
    (elem) => elem.boardId === boardId && elem.id === taskId
  );
  return task;
};

const addTask = (boardId, body) => {
  const { title, order, description, userId, columnId } = body;
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

const deleteTask = (taskId) => {
  db.tasks = db.tasks.filter((task) => task.id !== taskId);
  return `task ${taskId} has been removed`;
};

const deleteTasksOfBoard = (boardId) => {
  db.tasks = db.tasks.filter((task) => task.boardId !== boardId);
};

const updateTask = (boardId, taskId, body) => {
  const id = taskId;
  db.tasks = db.tasks.map((task) =>
    task.id === id ? { id, boardId, ...body } : task
  );
  const task = db.tasks.find((elem) => elem.id === id);
  return task;
};

module.exports = {
  getAllTasks,
  getTask,
  addTask,
  deleteTask,
  updateTask,
  deleteTasksOfBoard,
};
