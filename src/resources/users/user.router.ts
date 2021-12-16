import express, { Request, Response, Router } from 'express';

import { User } from './user.model';
import { responseWrapper } from '../../error';
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  removeUser,
} from './user.service';

const router: Router = express.Router();

router.route('/').get(async (req: Request, res: Response) => {
  const users = await getAllUsers();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req: Request, res: Response) => {
  responseWrapper(res, async () => {
    const { id } = req.params;
    const user = await getUser(id);
    res.status(200).send(User.toResponse(user));
  });
});

router.route('/').post(async (req, res) => {
  responseWrapper(res, async () => {
    const user = await createUser(User.fromRequest(req.body));
    res.status(201).send(User.toResponse(user));
  });
});

router.route('/:id').put(async (req, res) => {
  responseWrapper(res, async () => {
    const { id } = req.params;
    const user = await updateUser(id, User.fromRequest(req.body));
    res.status(200).send(User.toResponse(user));
  });
});

router.route('/:id').delete(async (req, res) => {
  responseWrapper(res, async () => {
    const { id } = req.params;
    await removeUser(id);
    res.status(204).send();
  });
});

export default router;
