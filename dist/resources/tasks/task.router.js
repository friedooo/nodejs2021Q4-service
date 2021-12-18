"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandler_1 = require("../../errorHandler");
const task_service_1 = require("./task.service");
// import { Task, ITask } from './task.model';
const router = express_1.default.Router();
router.route('/:boardId/tasks').get(async (req, res) => {
    const tasks = await (0, task_service_1.getAllTasks)();
    res.json(tasks);
});
router
    .route('/:boardId/tasks/:taskId')
    .get(async (req, res) => {
    (0, errorHandler_1.responseWrapper)(res, async () => {
        const { boardId, taskId } = req.params;
        const task = await (0, task_service_1.getTask)(boardId, taskId);
        res.status(200);
        res.json(task);
    });
});
router.route('/:boardId/tasks').post(async (req, res) => {
    const { boardId } = req.params;
    // const task = await createTask(
    //   boardId,
    //   Task.fromRequest({ ...req.body, boardId })
    // );
    const task = await (0, task_service_1.createTask)(boardId, req.body);
    res.status(201).send(task);
});
router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
    const { boardId, taskId } = req.params;
    // const task = await updateTask(
    //   boardId,
    //   taskId,
    //   Task.fromRequest({ ...req.body, boardId })
    // );
    const task = await (0, task_service_1.updateTask)(boardId, taskId, req.body);
    res.status(200).send(task);
});
router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
    (0, errorHandler_1.responseWrapper)(res, async () => {
        const { taskId } = req.params;
        await (0, task_service_1.removeTask)(taskId);
        res.status(204).send();
    });
});
exports.default = router;
