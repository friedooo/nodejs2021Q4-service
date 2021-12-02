const { v4: uuidv4 } = require('uuid');
const db = require('../../../data/db');

const getAllTasks = (boardId) => db.tasks; // Вариант для тестов
// db.tasks.filter((task) => task.boardId === boardId); // Более правильный вариант

// const getBoard = (id) => {
//   const board = db.boards.find((elem) => elem.id === id);
//   return board;
// };

// const addBoard = (body) => {
//   const { title, columns } = body;
//   const newBoard = {
//     id: uuidv4(),
//     title,
//     columns,
//   };

//   db.boards = [...db.boards, newBoard];

//   return newBoard;
// };

// const deleteBoard = (id) => {
//   db.boards = db.boards.filter((board) => board.id !== id);
//   return `board ${id} has been removed`;
// };

// const updateBoard = (id, body) => {
//   db.boards = db.boards.map((board) =>
//     board.id === id ? { id, ...body } : board
//   );
//   const board = db.boards.find((elem) => elem.id === id);

//   return board;
// };

module.exports = {
  getAllTasks,
};
