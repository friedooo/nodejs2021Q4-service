const { v4: uuidv4 } = require('uuid');
const db = require('../../data/db');
const tasksRepo = require('../tasks/task.memory.repository');

const getAllBoards = () => db.boards;

const getBoard = (id) => {
  const board = db.boards.find((elem) => elem.id === id);

  if (!board) {
    throw new Error(`Board with ID ${id} not found`);
  }
  return board;
};

const createBoard = (data) => {
  const { title, columns } = data;
  const newBoard = {
    id: uuidv4(),
    title,
    columns,
  };

  db.boards = [...db.boards, newBoard];

  return newBoard;
};

const updateBoard = (id, data) => {
  db.boards = db.boards.map((board) =>
    board.id === id ? { id, ...data } : board
  );
  const board = db.boards.find((elem) => elem.id === id);

  return board;
};

const removeBoard = (id) => {
  db.boards = db.boards.filter((board) => board.id !== id);
  tasksRepo.deleteTasksOfBoard(id);
  return `board ${id} has been removed`;
};

module.exports = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  removeBoard,
};
