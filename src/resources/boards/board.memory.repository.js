const { v4: uuidv4 } = require('uuid');
const db = require('../../data/db');

const getAllBoards = () => db.boards;

// const getUser = (id) => {
//   const user = db.users.find((elem) => elem.id === id);
//   return user;
// };

// const addUser = (body) => {
//   const { name, login, password } = body;
//   const newUser = {
//     id: uuidv4(),
//     name,
//     login,
//     password,
//   };

//   db.users = [...db.users, newUser];

//   return newUser;
// };

// const deleteUser = (id) => {
//   db.users = db.users.filter((user) => user.id !== id);
//   return `user ${id} has been removed`;
// };

// const updateUser = (id, body) => {
//   db.users = db.users.map((user) => (user.id === id ? { id, ...body } : user));
//   const user = db.users.find((elem) => elem.id === id);

//   return user;
// };

module.exports = {
  getAllBoards,
  // getUser, addUser, deleteUser, updateUser
};
