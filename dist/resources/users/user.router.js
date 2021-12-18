"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_model_1 = require("./user.model");
const errorHandler_1 = require("../../errorHandler");
const user_service_1 = require("./user.service");
const router = express_1.default.Router();
router.route('/').get(async (req, res) => {
    const users = await (0, user_service_1.getAllUsers)();
    res.json(users.map(user_model_1.User.toResponse));
});
router.route('/:id').get(async (req, res) => {
    (0, errorHandler_1.responseWrapper)(res, async () => {
        const { id } = req.params;
        const user = await (0, user_service_1.getUser)(id);
        res.status(200).send(user_model_1.User.toResponse(user));
    });
});
router.route('/').post(async (req, res) => {
    (0, errorHandler_1.responseWrapper)(res, async () => {
        const user = await (0, user_service_1.createUser)(user_model_1.User.fromRequest(req.body));
        res.status(201).send(user_model_1.User.toResponse(user));
    });
});
router.route('/:id').put(async (req, res) => {
    (0, errorHandler_1.responseWrapper)(res, async () => {
        const { id } = req.params;
        const user = await (0, user_service_1.updateUser)(id, user_model_1.User.fromRequest(req.body));
        res.status(200).send(user_model_1.User.toResponse(user));
    });
});
router.route('/:id').delete(async (req, res) => {
    (0, errorHandler_1.responseWrapper)(res, async () => {
        const { id } = req.params;
        await (0, user_service_1.removeUser)(id);
        res.status(204).send();
    });
});
exports.default = router;
