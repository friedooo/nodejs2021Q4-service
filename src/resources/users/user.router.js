// const User = require('./user.model');

const {
  getUsersOpts,
  getUserOpts,
  postUserOpts,
  deleteUserOpts,
  updateUserOpts,
} = require('./user.service');

function userRouter(fastify, options, done) {
  fastify.get('/users', getUsersOpts);
  fastify.get('/users/:id', getUserOpts);
  fastify.post('/users', postUserOpts);
  fastify.delete('/users/:id', deleteUserOpts);
  fastify.put('/users/:id', updateUserOpts);

  done();
}

module.exports = userRouter;
