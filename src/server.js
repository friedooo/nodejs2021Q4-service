"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fastify = require('fastify')({ logger: false });
const { PORT } = require('./common/config');
fastify.register(require('./resources/users/user.router'));
fastify.register(require('./resources/boards/board.router'));
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fastify.listen(PORT);
    }
    catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
});
start();
