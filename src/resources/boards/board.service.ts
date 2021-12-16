// import { getAllBoards, getBoard, createBoard, updateBoard, removeBoard } from './board.memory.repository';
import {
  getAll,
  getById,
  create,
  update,
  remove,
} from './board.memory.repository';
import { IBoard } from './board.model';

const getAllBoards = async () => getAll();

const getBoard = async (id: string) => getById(id);

const createBoard = async (data: IBoard) => create(data);

const updateBoard = async (id: string, data: IBoard) => update(id, data);

const removeBoard = async (id: string) => remove(id);

// module.exports = {
//   getAllBoards,
//   getBoard,
//   createBoard,
//   updateBoard,
//   removeBoard,
// };

export { getAllBoards, getBoard, createBoard, updateBoard, removeBoard };
