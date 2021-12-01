const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getById = (id) => usersRepo.findById(id);
const createUser = (user) => usersRepo.create(user);

module.exports = { getAll, createUser, getById };
