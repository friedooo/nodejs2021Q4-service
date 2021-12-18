"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getById = exports.getAll = void 0;
const uuid_1 = require("uuid");
const db_1 = __importDefault(require("../../data/db"));
const task_memory_repository_1 = require("../tasks/task.memory.repository");
const getAll = () => db_1.default.boards;
exports.getAll = getAll;
const getById = (id) => {
    const board = db_1.default.boards.find((elem) => elem.id === id);
    if (!board) {
        throw new Error(`Board with ID ${id} not found`);
    }
    return board;
};
exports.getById = getById;
const create = (data) => {
    const { title, columns } = data;
    const newBoard = {
        id: (0, uuid_1.v4)(),
        title,
        columns,
    };
    db_1.default.boards = [...db_1.default.boards, newBoard];
    return newBoard;
};
exports.create = create;
const update = (id, data) => {
    db_1.default.boards = db_1.default.boards.map((board) => board.id === id ? { ...data, id } : board);
    const board = db_1.default.boards.find((elem) => elem.id === id);
    return board;
};
exports.update = update;
const remove = (id) => {
    db_1.default.boards = db_1.default.boards.filter((board) => board.id !== id);
    (0, task_memory_repository_1.deleteTasksOfBoard)(id);
    return `board ${id} has been removed`;
};
exports.remove = remove;
