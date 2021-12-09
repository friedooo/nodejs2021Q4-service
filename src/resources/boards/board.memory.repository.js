const db = require('../../data/db');

const getAllBoards = () => db.boards;

const getById = (id) => {
  const board = DB.getEntityById(TABLE, id);

  if (!board) {
    throw new Error(`Board with id ${id} not found`);
  }

  return board;
};

const create = (data) => DB.createEntity(TABLE, data);

const update = (id, data) => {
  const updatedBoard = DB.updateEntity(TABLE, id, data);

  if (!updatedBoard) {
    throw new Error(`Board with id ${id} not found`);
  }

  return updatedBoard;
};

const remove = (id) => {
  const board = DB.getEntityById(TABLE, id);

  if (!board) {
    throw new Error(`Board with id ${id} not found`);
  }

  DB.removeEntity(TABLE, id);
};

module.exports = { getAllBoards, getById, create, update, remove };
