const tasksRepo = require('./task.memory.repository');

const getAllTasks = async (boardId) => tasksRepo.getAllTasks(boardId);

const getTask = async (boardId, taskId) => tasksRepo.getTask(boardId, taskId);

const createTask = async (boardId, data) => tasksRepo.createTask(boardId, data);

const updateTask = async (boardId, taskId, data) =>
  tasksRepo.updateTask(boardId, taskId, data);

const removeTask = async (taskId) => tasksRepo.removeTask(taskId);

module.exports = { getAllTasks, getTask, createTask, updateTask, removeTask };
