const usersRepo = require('./user.memory.repository');

const getAllUsers = async () => usersRepo.getAllUsers();

const getUser = async (id) => usersRepo.getUser(id);

const createUser = async (data) => usersRepo.createUser(data);

const updateUser = async (id, data) => usersRepo.updateUser(id, data);

const removeUser = async (id) => usersRepo.removeUser(id);

module.exports = { getAllUsers, getUser, createUser, updateUser, removeUser };
