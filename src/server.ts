import fastify from 'fastify';
const { PORT } = require('./common/config');

const f = fastify();

f.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: { title: 'fastify-api' },
  },
});

f.register(require('./resources/users/user.router'));
f.register(require('./resources/boards/board.router'));

const start = async () => {
  try {
    await f.listen(PORT);
  } catch (error) {
    f.log.error(error);
    process.exit(1);
  }
};

start();
