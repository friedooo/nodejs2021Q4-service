const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const createUser = (user) => usersRepo.create(user);

module.exports = { getAll, createUser };
