import express, { Request, Response, Router } from 'express';
import { responseWrapper } from '../../errorHandler';

import {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  removeTask,
} from './task.service';

// import { Task, ITask } from './task.model';

const router: Router = express.Router();

router.route('/:boardId/tasks').get(async (req: Request, res: Response) => {
  const tasks = await getAllTasks();

  res.json(tasks);
});

router
  .route('/:boardId/tasks/:taskId')
  .get(async (req: Request, res: Response) => {
    responseWrapper(res, async () => {
      const { boardId, taskId } = req.params;
      const task = await getTask(boardId, taskId);
      res.status(200);
      res.json(task);
    });
  });

router.route('/:boardId/tasks').post(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const task = await createTask(boardId, req.body);
  res.status(201).send(task);
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const { boardId, taskId } = req.params;
  const task = await updateTask(boardId, taskId, req.body);
  res.status(200).send(task);
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  responseWrapper(res, async () => {
    const { taskId } = req.params;
    await removeTask(taskId);
    res.status(204).send();
  });
});

export default router;
