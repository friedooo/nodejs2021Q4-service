// const User = require('./user.model');

const {
  getBoardsOpts,
  getBoardOpts,
  // postUserOpts,
  // deleteUserOpts,
  // updateUserOpts,
} = require('./board.service');

function boardRouter(fastify, options, done) {
  fastify.get('/boards', getBoardsOpts);
  fastify.get('/boards/:id', getBoardOpts);
  // fastify.post('/users', postUserOpts);
  // fastify.delete('/users/:id', deleteUserOpts);
  // fastify.put('/users/:id', updateUserOpts);

  done();
}

module.exports = boardRouter;
