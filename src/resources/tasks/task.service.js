const tasksRepo = require('./task.memory.repository');

const getAllTasks = async (boardId) => tasksRepo.getAllTasks(boardId);

const getTask = async (boardId, taskId) => tasksRepo.getTask(boardId, taskId);

const create = async (boardId, data) => tasksRepo.create(boardId, data);

const update = async (boardId, taskId, data) =>
  tasksRepo.update(boardId, taskId, data);

const remove = async (taskId) => tasksRepo.remove(taskId);

module.exports = { getAllTasks, getTask, create, update, remove };
