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
  deleteTaskOpts,
  updateTaskOpts,
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
  fastify.delete('/boards/:id/tasks/:id', deleteTaskOpts);
  fastify.put('/boards/:id/tasks/:id', updateTaskOpts);

  done();
}

module.exports = boardRouter;
