const { v4: uuidv4 } = require('uuid');
const db = require('../../data/db');
const tasksRepo = require('../tasks/task.memory.repository');

const getAllUsers = () => db.users;

const getUser = (id) => {
  const user = db.users.find((elem) => elem.id === id);
  return user;
};

const createUser = (data) => {
  const { name, login, password } = data;
  const newUser = {
    id: uuidv4(),
    name,
    login,
    password,
  };

  db.users = [...db.users, newUser];

  return newUser;
};

const updateUser = (id, data) => {
  db.users = db.users.map((user) => (user.id === id ? { id, ...data } : user));
  const user = db.users.find((elem) => elem.id === id);
  return user;
};

const removeUser = (id) => {
  db.users = db.users.filter((user) => user.id !== id);
  tasksRepo.deletedUserCase(id);
  return `user ${id} has been removed`;
};

module.exports = { getAllUsers, getUser, createUser, updateUser, removeUser };
