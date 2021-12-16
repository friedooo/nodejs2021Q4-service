import { v4 as uuidv4 } from 'uuid';

import db from '../../data/db';
import { IBoard } from './board.model';
import { deleteTasksOfBoard } from '../tasks/task.memory.repository';

const getAll = () => db.boards;

const getById = (id: string) => {
  const board = db.boards.find((elem) => elem.id === id);

  if (!board) {
    throw new Error(`Board with ID ${id} not found`);
  }
  return board;
};

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

const update = (id: string, data: IBoard) => {
  db.boards = db.boards.map((board) =>
    board.id === id ? { ...data, id } : board
  );
  const board = db.boards.find((elem) => elem.id === id);

  return board;
};

const remove = (id: string) => {
  db.boards = db.boards.filter((board) => board.id !== id);
  deleteTasksOfBoard(id);
  return `board ${id} has been removed`;
};

// export { getAllBoards, getBoard, createBoard, updateBoard, removeBoard };
export { getAll, getById, create, update, remove };
