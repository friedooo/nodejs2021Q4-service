const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');
const { responseWrapper } = require('../../error');

router.route('/').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await tasksService.getAllTasks(boardId);
  res.json(tasks);
});

router.route('/:taskId').get(async (req, res) => {
  responceWrapper(res, async () => {
    const { boardId, taskId } = req.params;
    const task = await tasksService.getTask(boardId, taskId);
    res.status(200);
    res.json(task);
  });
});

router.route('/').post(async (req, res) => {
  const { boardId } = req.params;
  const task = await tasksService.createTask(
    boardId,
    Task.fromRequest({ ...req.body, boardId })
  );
  res.status(201).send(task);
});

router.route('/:taskId').put(async (req, res) => {
  const { boardId, taskId } = req.params;
  const task = await tasksService.updateTask(
    boardId,
    taskId,
    Task.fromRequest({ ...req.body, boardId })
  );
  res.status(200).send(task);
});

router.route('/:taskId').delete(async (req, res) => {
  responceWrapper(res, async () => {
    const { taskId } = req.params;
    await tasksService.removeTask(taskId);
    res.status(204).send();
  });
});

module.exports = router;
