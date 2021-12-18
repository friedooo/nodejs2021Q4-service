"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTasksOfBoard = exports.deletedUserCase = exports.remove = exports.update = exports.create = exports.getById = exports.getAll = void 0;
const uuid_1 = require("uuid");
const db_1 = __importDefault(require("../../data/db"));
const getAll = () => db_1.default.tasks;
exports.getAll = getAll;
const getById = (boardId, taskId) => {
    const task = db_1.default.tasks.find((elem) => elem.boardId === boardId && elem.id === taskId);
    if (!task) {
        throw new Error(`Task with ID ${taskId} not found`);
    }
    return task;
};
exports.getById = getById;
const create = (boardId, data) => {
    const newId = (0, uuid_1.v4)();
    const newTask = {
        id: newId,
        ...data,
        boardId,
    };
    db_1.default.tasks.push(newTask);
    return newTask;
};
exports.create = create;
const update = (boardId, taskId, data) => {
    const id = taskId;
    db_1.default.tasks = db_1.default.tasks.map((task) => {
        if (task.id === id) {
            return {
                ...data,
                id,
                boardId,
            };
        }
        return task;
    });
    const task = db_1.default.tasks.find((elem) => elem.id === taskId);
    return task;
};
exports.update = update;
const remove = (taskId) => {
    const taskToDelete = db_1.default.tasks.find((elem) => elem.id === taskId);
    if (!taskToDelete) {
        throw new Error(`Task with ID ${taskId} not found`);
    }
    db_1.default.tasks = db_1.default.tasks.filter((task) => task.id !== taskId);
    return `task ${taskId} has been removed`;
};
exports.remove = remove;
const deletedUserCase = (userId) => {
    db_1.default.tasks = db_1.default.tasks.map((task) => {
        if (task.userId !== undefined) {
            if (task.userId === userId) {
                task = { ...task, userId: null };
                return task;
            }
        }
        return task;
    });
};
exports.deletedUserCase = deletedUserCase;
const deleteTasksOfBoard = (boardId) => {
    db_1.default.tasks = db_1.default.tasks.filter((task) => task.boardId !== boardId);
};
exports.deleteTasksOfBoard = deleteTasksOfBoard;
