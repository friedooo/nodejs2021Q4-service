// const User = require('./user.model');

const {
  getBoardsOpts,
  getBoardOpts,
  postBoardOpts,
  deleteBoardOpts,
  // updateUserOpts,
} = require('./board.service');

function boardRouter(fastify, options, done) {
  fastify.get('/boards', getBoardsOpts);
  fastify.get('/boards/:id', getBoardOpts);
  fastify.post('/boards', postBoardOpts);
  fastify.delete('/boards/:id', deleteBoardOpts);
  // fastify.put('/users/:id', updateUserOpts);

  done();
}

module.exports = boardRouter;
