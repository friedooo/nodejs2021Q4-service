const { v4: uuidv4 } = require('uuid');
const db = require('../../../data/db');

const getAllTasks = (boardId) => db.tasks; // Вариант для тестов
// db.tasks.filter((task) => task.boardId === boardId); // Более правильный вариант

const getTask = (boardId, taskId) => {
  const task = db.tasks.find(
    (elem) => elem.boardId === boardId && elem.id === taskId
  );
  return task;
};

const addTask = (boardId, body) => {
  const { title, order, description, userId, columnId } = body;
  const newTask = {
    id: uuidv4(),
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  };

  db.tasks = [...db.tasks, newTask];

  return newTask;
};

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
  getTask,
  addTask,
};
