// import { getAllBoards, getBoard, createBoard, updateBoard, removeBoard } from './board.memory.repository';
import { getAll } from './board.memory.repository';

const getAllBoards = async () => getAll();

// const getBoard = async (id) => boardsRepo.getBoard(id);

// const createBoard = async (data) => boardsRepo.createBoard(data);

// const updateBoard = async (id, data) => boardsRepo.updateBoard(id, data);

// const removeBoard = async (id) => boardsRepo.removeBoard(id);

// module.exports = {
//   getAllBoards,
//   getBoard,
//   createBoard,
//   updateBoard,
//   removeBoard,
// };

export { getAllBoards };
