import express, { Request, Response, NextFunction, Router } from 'express';

import { responseWrapper } from '../../error';
import {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  removeBoard,
} from './board.service';
import { Board, IBoard } from './board.model';

const router: Router = express.Router();

router.route('/').get(async (req: Request, res: Response) => {
  const boards = await getAllBoards();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  responseWrapper(res, async () => {
    const { id } = req.params;
    const board = await getBoard(id);
    // res.status(200).send(Board.toResponse(board));
    res.status(200).send(board);
  });
});

router.route('/').post(async (req, res) => {
  const board = await createBoard(req.body);
  res.status(201).send(board);
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const board = await updateBoard(id, req.body);
  res.status(200).send(board);

  // const board = await createBoard(Board.fromRequest(req.body));
  // res.status(201).send(Board.toResponse(board));
});

router.route('/:id').delete(async (req, res) => {
  responseWrapper(res, async () => {
    const { id } = req.params;
    await removeBoard(id);
    res.status(204).send();
  });
});

export default router;
