const { v4: uuidv4 } = require('uuid');
const db = require('../../data/db');

const getAllBoards = () => db.boards;

const getById = (id) => {
  const board = db.boards.find((elem) => elem.id === id);
  return board;
};

const create = (data) => {
  const { title, columns } = data;
  const newBoard = {
    id: uuidv4(),
    title,
    columns,
  };

  db.boards = [...db.boards, newBoard];

  return newBoard;
};

const update = (id, data) => {
  db.boards = db.boards.map((board) =>
    board.id === id ? { id, ...data } : board
  );
  const board = db.boards.find((elem) => elem.id === id);

  return board;
};

const remove = (id) => {
  db.boards = db.boards.filter((board) => board.id !== id);
  // tasksRepo.deleteTasksOfBoard(id);
  return `board ${id} has been removed`;
};

module.exports = { getAllBoards, getById, create, update, remove };
