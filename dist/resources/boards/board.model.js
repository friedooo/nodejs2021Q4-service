"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const uuid_1 = require("uuid");
class Board {
    constructor({ id = (0, uuid_1.v4)(), title = 'board', columns = [] } = {}) {
        this.id = id;
        this.title = title;
        this.columns = columns;
    }
}
exports.Board = Board;
