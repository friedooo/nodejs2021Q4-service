// const User = require('./user.model');

const {
  getUsersOpts,
  getUserOpts,
  // getItem,
  // addItem,
  // deleteItem,
  // updateItem,
} = require('./user.service');

function router(fastify, options, done) {
  // Get all items
  fastify.get('/users', getUsersOpts);
  fastify.get('/users/:id', getUserOpts);

  // // Get single items
  // fastify.get('/items/:id', getItemOpts);

  // // Add item
  // fastify.post('/items', postItemOpts);

  // // Delete item
  // fastify.delete('/items/:id', deleteItemOpts);

  // // Update item
  // fastify.put('/items/:id', updateItemOpts);

  done();
}

module.exports = router;
