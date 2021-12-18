"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const morgan = require('morgan');
// const swaggerUI = require('swagger-ui-express');
// const path = require('path');
// const YAML = require('yamljs');
const user_router_1 = __importDefault(require("./resources/users/user.router"));
const board_router_1 = __importDefault(require("./resources/boards/board.router"));
const task_router_1 = __importDefault(require("./resources/tasks/task.router"));
const app = (0, express_1.default)();
// const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
app.use(express_1.default.json());
// app.use(morgan('tiny'));
// app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
app.use((err, req, res, next) => {
    if (err) {
        res.status(500).json({ message: err.message });
    }
    next();
});
app.use('/users', user_router_1.default);
app.use('/boards', board_router_1.default);
board_router_1.default.use('/', task_router_1.default);
exports.default = app;
