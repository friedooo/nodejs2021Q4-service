// const router = require('express').Router();
// const usersService = require('./user.service');
const { v4: uuidv4 } = require('uuid');
const User = require('./user.model');
let items = require('../../data/items');

const getItems = (req, reply) => {
  reply.send(items);
};

const getItem = (req, reply) => {
  const { id } = req.params;

  const item = items.find((item) => item.id === id);

  reply.send(item);
};

const addItem = (req, reply) => {
  const { name } = req.body;
  const item = {
    id: uuidv4(),
    name,
  };

  items = [...items, item];

  reply.code(201).send(item);
};

const deleteItem = (req, reply) => {
  const { id } = req.params;

  items = items.filter((item) => item.id !== id);

  reply.send({ message: `Item ${id} has been removed` });
};

const updateItem = (req, reply) => {
  const { id } = req.params;
  const { name } = req.body;

  items = items.map((item) => (item.id === id ? { id, name } : item));

  item = items.find((item) => item.id === id);

  reply.send(item);
};

module.exports = {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
};

// router.route('/').get(async (req, res) => {
//   const users = await usersService.getAll();
//   // map user fields to exclude secret fields like "password"
//   res
//     .status(200)
//     .setHeader('content-type', 'application/json')
//     .json(users.map(User.toResponse));
// });

// router.route('/*').get(async (req, res) => {
//   const id = req.url.split('/')[1];
//   const foundedUser = await usersService.getById(id);
//   // map user fields to exclude secret fields like "password"
//   res
//     .status(200)
//     .setHeader('content-type', 'application/json')
//     .json(User.toResponse(foundedUser));
// });

// router.route('/').post(async (req, res) => {
//   const newUser = await usersService.createUser(req.body);
//   // map user fields to exclude secret fields like "password"
//   res
//     .status(201)
//     .setHeader('content-type', 'application/json')
//     .json(User.toResponse(newUser));
// });

// module.exports = router;
