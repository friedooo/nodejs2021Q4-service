const { v4: uuidv4 } = require('uuid');
const db = require('../../data/db');

const getAll = async () => db.users;
const create = async (user) => {
  const newUser = { id: uuidv4(), ...user };
  db.users.push(newUser);
  return newUser;
};

module.exports = { getAll, create };
