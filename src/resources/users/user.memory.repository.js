const { v4: uuidv4 } = require('uuid');
const db = require('../../data/db');

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
  return `user ${id} has been removed`;
};

// const updateItem = (req, reply) => {
//   const { id } = req.params;
//   const { name } = req.body;

//   items = items.map((item) => (item.id === id ? { id, name } : item));

//   const item = items.find((elem) => elem.id === id);

//   reply.send(item);
// };

module.exports = { getAllUsers, getUser, addUser, deleteUser };
