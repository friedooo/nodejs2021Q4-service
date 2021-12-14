const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');
const { responceWrapper } = require('../../error');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAllBoards();
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  responceWrapper(res, async () => {
    const { id } = req.params;
    const board = await boardsService.getBoard(id);
    res.status(200).send(Board.toResponse(board));
  });
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.createBoard(Board.fromRequest(req.body));
  res.status(201).send(Board.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.updateBoard(
    id,
    Board.fromRequest(req.body)
  );
  res.status(200).send(Board.toResponse(board));
});

router.route('/:id').delete(async (req, res) => {
  responceWrapper(res, async () => {
    const { id } = req.params;
    await boardsService.removeBoard(id);
    res.status(204).send();
  });
});

module.exports = router;
