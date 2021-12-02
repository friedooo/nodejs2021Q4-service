// const User = require('./user.model');

const {
  getBoardsOpts,
  getBoardOpts,
  postBoardOpts,
  deleteBoardOpts,
  updateBoardOpts,
} = require('./board.service');

const {
  getTasksOpts,
  getTaskOpts,
  postTaskOpts,
} = require('./tasks/task.service');

function boardRouter(fastify, options, done) {
  fastify.get('/boards', getBoardsOpts);
  fastify.get('/boards/:id', getBoardOpts);
  fastify.post('/boards', postBoardOpts);
  fastify.delete('/boards/:id', deleteBoardOpts);
  fastify.put('/boards/:id', updateBoardOpts);

  fastify.get('/boards/:id/tasks', getTasksOpts);
  fastify.get('/boards/:id/tasks/:id', getTaskOpts);
  fastify.post('/boards/:id/tasks', postTaskOpts);

  done();
}

module.exports = boardRouter;
