import fastify from 'fastify';
const f = fastify();
f.register(require('./resources/users/user.router'));
f.register(require('./resources/boards/board.router'));
const start = async () => {
    try {
        await f.listen(4000);
    }
    catch (error) {
        f.log.error(error);
        process.exit(1);
    }
};
start();
