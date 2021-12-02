const fastify = require('fastify')({ logger: false });
const { PORT } = require('./common/config');

// const app = require('./app');
// app.listen(PORT, () =>
//   console.log(`App is running on http://localhost:${PORT}`)
// );

fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: { title: 'fastify-api' },
  },
});

fastify.register(require('./app'));

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
