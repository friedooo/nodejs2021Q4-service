"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getUserById = exports.getAll = void 0;
const uuid_1 = require("uuid");
const db_1 = __importDefault(require("../../data/db"));
const task_memory_repository_1 = require("../tasks/task.memory.repository");
const getAll = () => db_1.default.users;
exports.getAll = getAll;
const getUserById = (id) => {
    const user = db_1.default.users.find((elem) => elem.id === id);
    if (!user) {
        throw new Error(`User with ID ${id} not found`);
    }
    return user;
};
exports.getUserById = getUserById;
const create = (data) => {
    const { name, login, password } = data;
    const newUser = {
        id: (0, uuid_1.v4)(),
        name,
        login,
        password,
    };
    db_1.default.users = [...db_1.default.users, newUser];
    return newUser;
};
exports.create = create;
const update = (id, data) => {
    db_1.default.users = db_1.default.users.map((user) => (user.id === id ? { ...data, id } : user));
    const user = db_1.default.users.find((elem) => elem.id === id);
    if (!user) {
        throw new Error(`User with ID ${id} not found`);
    }
    return user;
};
exports.update = update;
const remove = (id) => {
    db_1.default.users = db_1.default.users.filter((user) => user.id !== id);
    (0, task_memory_repository_1.deletedUserCase)(id);
    return `user ${id} has been removed`;
};
exports.remove = remove;
