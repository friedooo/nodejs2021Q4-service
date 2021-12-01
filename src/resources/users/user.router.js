const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json(users.map(User.toResponse));
});

router.route('/*').get(async (req, res) => {
  const id = req.url.split('/')[1];
  const foundedUser = await usersService.getById(id);
  // map user fields to exclude secret fields like "password"
  res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json(User.toResponse(foundedUser));
});

router.route('/').post(async (req, res) => {
  const newUser = await usersService.createUser(req.body);
  // map user fields to exclude secret fields like "password"
  res
    .status(201)
    .setHeader('content-type', 'application/json')
    .json(User.toResponse(newUser));
});

module.exports = router;
