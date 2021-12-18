"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseWrapper = exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    if (err) {
        res.sendStatus(500);
    }
    next();
};
exports.errorHandler = errorHandler;
const responseWrapper = async (res, cb) => {
    try {
        await cb();
    }
    catch (err) {
        const result = err.message;
        res.status(404).send({ message: result });
    }
};
exports.responseWrapper = responseWrapper;
