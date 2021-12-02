// const User = require('./user.model');

const {
  getBoardsOpts,
  getBoardOpts,
  postBoardOpts,
  deleteBoardOpts,
  updateBoardOpts,
} = require('./board.service');

function boardRouter(fastify, options, done) {
  fastify.get('/boards', getBoardsOpts);
  fastify.get('/boards/:id', getBoardOpts);
  fastify.post('/boards', postBoardOpts);
  fastify.delete('/boards/:id', deleteBoardOpts);
  fastify.put('/boards/:id', updateBoardOpts);

  done();
}

module.exports = boardRouter;
