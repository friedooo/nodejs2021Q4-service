// const User = require('./user.model');

const {
  getBoardsOpts,
  getBoardOpts,
  postBoardOpts,
  // deleteUserOpts,
  // updateUserOpts,
} = require('./board.service');

function boardRouter(fastify, options, done) {
  fastify.get('/boards', getBoardsOpts);
  fastify.get('/boards/:id', getBoardOpts);
  fastify.post('/boards', postBoardOpts);
  // fastify.delete('/users/:id', deleteUserOpts);
  // fastify.put('/users/:id', updateUserOpts);

  done();
}

module.exports = boardRouter;
