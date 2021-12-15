import express, { Request, Response, NextFunction, Router } from 'express';
import { responseWrapper } from '../../error';

import { getAllTasks, getTask, createTask } from './task.service';

import { Task, ITask } from './task.model';

const router: Router = express.Router();

router.route('/').get(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const tasks = await getAllTasks(boardId);
  res.json(tasks);
});

router.route('/:taskId').get(async (req: Request, res: Response) => {
  responseWrapper(res, async () => {
    const { boardId, taskId } = req.params;
    const task = await getTask(boardId, taskId);
    res.status(200);
    res.json(task);
  });
});

router.route('/').post(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  // const task = await createTask(
  //   boardId,
  //   Task.fromRequest({ ...req.body, boardId })
  // );

  const task = await createTask(boardId, req.body);
  res.status(201).send(task);
});

// router.route('/:taskId').put(async (req, res) => {
//   const { boardId, taskId } = req.params;
//   const task = await tasksService.updateTask(
//     boardId,
//     taskId,
//     Task.fromRequest({ ...req.body, boardId })
//   );
//   res.status(200).send(task);
// });

// router.route('/:taskId').delete(async (req, res) => {
//   responceWrapper(res, async () => {
//     const { taskId } = req.params;
//     await tasksService.removeTask(taskId);
//     res.status(204).send();
//   });
// });

export default router;
