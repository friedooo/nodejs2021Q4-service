// const express = require('express');
// const swaggerUI = require('swagger-ui-express');
// const path = require('path');
// const YAML = require('yamljs');
// const userRouter = require('./resources/users/user.router');

// const app = express();
// const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
// app.use(express.json());
// app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
// app.use('/', (req, res, next) => {
//   if (req.originalUrl === '/') {
//     res.send('Service is running!');
//     return;
//   }
//   next();
// });
// app.use('/users', userRouter);
// module.exports = app;

const {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
} = require('./resources/users/user.router');

// Item schema
const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};

// Options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Item,
      },
    },
  },
  handler: getItems,
};

const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

const postItemOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      },
    },
    response: {
      201: Item,
    },
  },
  handler: addItem,
};

const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: deleteItem,
};

const updateItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: updateItem,
};

function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get('/items', getItemsOpts);

  // Get single items
  fastify.get('/items/:id', getItemOpts);

  // Add item
  fastify.post('/items', postItemOpts);

  // Delete item
  fastify.delete('/items/:id', deleteItemOpts);

  // Update item
  fastify.put('/items/:id', updateItemOpts);

  done();
}

module.exports = itemRoutes;
