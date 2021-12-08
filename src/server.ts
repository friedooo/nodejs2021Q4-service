import fastify from 'fastify';
// import { PORT } from './common/config';
import userRouter from "./resources/users/user.router";

const f = fastify();

// f.register(require('fastify-swagger'), {
//   exposeRoute: true,
//   routePrefix: '/docs',
//   swagger: {
//     info: { title: 'fastify-api' },
//   },
// });

f.register(userRouter);
f.register(require('./resources/boards/board.router'));

const start = async () => {
  try {
    await f.listen(4000);
    
  } catch (error) {
    f.log.error(error);
    process.exit(1);
  }
};

start();
