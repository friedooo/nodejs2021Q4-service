const usersRepo = require('./user.memory.repository');

const getAllUsers = async () => usersRepo.getAllUsers();

const getUser = async (id) => usersRepo.getUser(id);

const create = async (data) => usersRepo.addUser(data);

const update = async (id, data) => usersRepo.updateUser(id, data);

const remove = async (id) => usersRepo.deleteUser(id);

module.exports = { getAllUsers, getUser, create, update, remove };
