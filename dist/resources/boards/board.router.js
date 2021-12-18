"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandler_1 = require("../../errorHandler");
const board_service_1 = require("./board.service");
const router = express_1.default.Router();
router.route('/').get(async (req, res) => {
    const boards = await (0, board_service_1.getAllBoards)();
    res.json(boards);
});
router.route('/:id').get(async (req, res) => {
    (0, errorHandler_1.responseWrapper)(res, async () => {
        const { id } = req.params;
        const board = await (0, board_service_1.getBoard)(id);
        // res.status(200).send(Board.toResponse(board));
        res.status(200).send(board);
    });
});
router.route('/').post(async (req, res) => {
    const board = await (0, board_service_1.createBoard)(req.body);
    res.status(201).send(board);
});
router.route('/:id').put(async (req, res) => {
    const { id } = req.params;
    const board = await (0, board_service_1.updateBoard)(id, req.body);
    res.status(200).send(board);
    // const board = await createBoard(Board.fromRequest(req.body));
    // res.status(201).send(Board.toResponse(board));
});
router.route('/:id').delete(async (req, res) => {
    (0, errorHandler_1.responseWrapper)(res, async () => {
        const { id } = req.params;
        await (0, board_service_1.removeBoard)(id);
        res.status(204).send();
    });
});
exports.default = router;
