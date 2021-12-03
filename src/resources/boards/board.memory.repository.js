const { v4: uuidv4 } = require('uuid');
const { tasks } = require('../../data/db');
const db = require('../../data/db');
const tasksRepo = require('./tasks/task.memory.repository');

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
  tasksRepo.deleteTasksOfBoard(id);
  return `board ${id} has been removed`;
};

const updateBoard = (id, body) => {
  db.boards = db.boards.map((board) =>
    board.id === id ? { id, ...body } : board
  );
  const board = db.boards.find((elem) => elem.id === id);

  return board;
};

module.exports = {
  getAllBoards,
  getBoard,
  addBoard,
  deleteBoard,
  updateBoard,
};
