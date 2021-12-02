const { v4: uuidv4 } = require('uuid');
const db = require('../../data/db');

const getAllBoards = () => db.boards;

const getBoard = (id) => {
  const board = db.boards.find((elem) => elem.id === id);
  return board;
};

const addBoard = (body) => {
  const { title, columns } = body;
  const newBoard = {
    id: uuidv4(),
    title,
    columns,
  };

  db.boards = [...db.boards, newBoard];

  return newBoard;
};

const deleteBoard = (id) => {
  db.boards = db.boards.filter((board) => board.id !== id);
  return `board ${id} has been removed`;
};

// const updateUser = (id, body) => {
//   db.users = db.users.map((user) => (user.id === id ? { id, ...body } : user));
//   const user = db.users.find((elem) => elem.id === id);

//   return user;
// };

module.exports = {
  getAllBoards,
  getBoard,
  addBoard,
  deleteBoard,
  // getUser, addUser, deleteUser, updateUser
};
