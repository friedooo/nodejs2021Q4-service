import express, { Request, Response, NextFunction, Router } from 'express';

import { responseWrapper } from '../../error';
import { getAllBoards } from './board.service';
import { Board, IBoard } from './board.model';

const router: Router = express.Router();

router.route('/').get(async (req: Request, res: Response) => {
  const boards = await getAllBoards();
  res.json(boards);
});

// router.route('/:id').get(async (req, res) => {
//   responceWrapper(res, async () => {
//     const { id } = req.params;
//     const board = await boardsService.getBoard(id);
//     res.status(200).send(Board.toResponse(board));
//   });
// });

// router.route('/').post(async (req, res) => {
//   const board = await boardsService.createBoard(Board.fromRequest(req.body));
//   res.status(201).send(Board.toResponse(board));
// });

// router.route('/:id').put(async (req, res) => {
//   const { id } = req.params;
//   const board = await boardsService.updateBoard(
//     id,
//     Board.fromRequest(req.body)
//   );
//   res.status(200).send(Board.toResponse(board));
// });

// router.route('/:id').delete(async (req, res) => {
//   responceWrapper(res, async () => {
//     const { id } = req.params;
//     await boardsService.removeBoard(id);
//     res.status(204).send();
//   });
// });

export default router;
