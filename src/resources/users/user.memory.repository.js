const { v4: uuidv4 } = require('uuid');
const db = require('../../data/db');
// const tasksRepo = require('../boards/tasks/task.memory.repository');

const getAllUsers = () => db.users;

const getUser = (id) => {
  const user = db.users.find((elem) => elem.id === id);
  return user;
};

const addUser = (body) => {
  const { name, login, password } = body;
  const newUser = {
    id: uuidv4(),
    name,
    login,
    password,
  };

  db.users = [...db.users, newUser];

  return newUser;
};

const deleteUser = (id) => {
  db.users = db.users.filter((user) => user.id !== id);

  // db.tasks = db.tasks.map((task) => {
  //   if (task.userId === id) {
  //     task.userId = null;
  //     return task;
  //   }
  // });
  // tasksRepo.updateTask()
  return `user ${id} has been removed`;
};

const updateUser = (id, body) => {
  db.users = db.users.map((user) => (user.id === id ? { id, ...body } : user));
  const user = db.users.find((elem) => elem.id === id);

  return user;
};

module.exports = { getAllUsers, getUser, addUser, deleteUser, updateUser };
