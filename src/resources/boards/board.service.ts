// import { getAllBoards, getBoard, createBoard, updateBoard, removeBoard } from './board.memory.repository';
import {
  getAll,
  getById,
  create,
  update,
  remove,
} from './board.memory.repository';
import { IBoard } from './board.model';

/**
 * Returns array of Boards or empty
 * @returns array of Boards Array<IBoard> | []
 */
const getAllBoards = async () => getAll();

/**
 * Returns Board by ID
 * @param id Board's ID
 * @returns Board<IBoard>
 */
const getBoard = async (id: string) => getById(id);

/**
 * Create Board with data from request. Returns new Board.
 * @param data data from request
 * @returns created Board<IBoard>
 */
const createBoard = async (data: IBoard) => create(data);

/**
 * Update Board by ID with data. Returns updated Board
 * @param id Board's ID
 * @param data data for update of a new Board<IBoard>
 * @returns updated Board<IBoard>
 */
const updateBoard = async (id: string, data: IBoard) => update(id, data);

/**
 * Remove Board by ID
 * @param id Board's ID
 * @returns message of successfull deletion
 */
const removeBoard = async (id: string) => remove(id);

export { getAllBoards, getBoard, createBoard, updateBoard, removeBoard };
