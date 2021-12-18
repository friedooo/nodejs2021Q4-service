import { v4 as uuidv4 } from 'uuid';

import db from '../../data/db';
import { IBoard } from './board.model';
import { deleteTasksOfBoard } from '../tasks/task.memory.repository';

/**
 * Returns array of Boards or empty
 * @returns array of Boards Array<IBoard> | []
 */
const getAll = () => db.boards;

/**
 * Returns Board by ID or Throws error, if Board not found in database.
 * @param id Board's ID
 * @returns Board<IBoard>
 */
const getById = (id: string) => {
  const board = db.boards.find((elem) => elem.id === id);
  if (!board) {
    throw new Error(`Board with ID ${id} not found`);
  }
  return board;
};

/**
 * Create Board with data from request. Returns new Board.
 * @param data data from request
 * @returns created Board<IBoard>
 */
const create = (data: IBoard) => {
  const { title, columns } = data;
  const newBoard = {
    id: uuidv4(),
    title,
    columns,
  };
  db.boards = [...db.boards, newBoard];
  return newBoard;
};

/**
 * Update Board by ID with data.
 * @param id Board's ID
 * @param data data for update of a new Board<IBoard>
 * @returns updated Board<IBoard>
 */
const update = (id: string, data: IBoard) => {
  db.boards = db.boards.map((board) =>
    board.id === id ? { ...data, id } : board
  );
  const board = db.boards.find((elem) => elem.id === id);
  return board;
};

/**
 * Remove Board by ID
 * @param id Board's ID
 * @returns message of successfull deletion
 */
const remove = (id: string) => {
  db.boards = db.boards.filter((board) => board.id !== id);
  deleteTasksOfBoard(id);
  return `board ${id} has been removed`;
};

export { getAll, getById, create, update, remove };
