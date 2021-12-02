const tasksRepo = require('./task.memory.repository');

const Task = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    order: { type: 'number' },
    description: { type: 'string' },
    userId: { type: 'string' },
    boardId: { type: 'string' },
    columnId: { type: 'string' },
  },
};

const getTasksOpts = {
  method: 'GET',
  schema: {
    response: {
      200: {
        type: 'array',
        items: Task,
      },
    },
  },
  handler: async (req, reply) => {
    const boardId = req.url.split('/')[2];
    await reply.send(tasksRepo.getAllTasks(boardId));
  },
};

// const getBoardOpts = {
//   method: 'GET',
//   schema: {
//     response: {
//       200: Board,
//     },
//   },
//   handler: async (req, reply) => {
//     const { id } = await req.params;
//     await reply.send(boardsRepo.getBoard(id));
//   },
// };

// const postBoardOpts = {
//   method: 'POST',
//   schema: {
//     body: {
//       type: 'object',
//       required: ['title', 'columns'],
//       properties: {
//         title: { type: 'string' },
//         columns: { type: 'array' },
//       },
//     },
//     response: {
//       201: Board,
//     },
//   },
//   handler: async (req, reply) => {
//     await reply.code(201).send(boardsRepo.addBoard(req.body));
//   },
// };

// const deleteBoardOpts = {
//   method: 'DELETE',
//   schema: {
//     response: {
//       200: {
//         type: 'object',
//         properties: {
//           message: { type: 'string' },
//         },
//       },
//     },
//   },
//   handler: async (req, reply) => {
//     const { id } = await req.params;
//     await reply.send(boardsRepo.deleteBoard(id));
//   },
// };

// const updateBoardOpts = {
//   method: 'PUT',
//   schema: {
//     response: {
//       200: Board,
//     },
//   },
//   handler: async (req, reply) => {
//     const { id } = await req.params;
//     await reply.send(boardsRepo.updateBoard(id, req.body));
//   },
// };

module.exports = {
  getTasksOpts,
};
