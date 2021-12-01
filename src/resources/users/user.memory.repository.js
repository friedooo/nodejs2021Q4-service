const { v4: uuidv4 } = require('uuid');
const db = require('../../data/db');

const getAll = async () => db.users;

const getById = async (id) => {
  const foundedUser = await db.users.find((user) => user.id === id);
  return foundedUser;
};

const create = async (user) => {
  const newUser = { id: uuidv4(), ...user };
  db.users.push(newUser);
  return newUser;
};

module.exports = { getAll, getById, create };
