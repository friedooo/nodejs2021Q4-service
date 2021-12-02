const boardsRepo = require('./board.memory.repository');

const Column = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    order: { type: 'number' },
  },
};

const Board = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    columns: {
      type: 'array',
      items: Column,
    },
  },
};

const getBoardsOpts = {
  method: 'GET',
  schema: {
    response: {
      200: {
        type: 'array',
        items: Board,
      },
    },
  },
  handler: async (req, reply) => {
    await reply.send(boardsRepo.getAllBoards());
  },
};

const getBoardOpts = {
  method: 'GET',
  schema: {
    response: {
      200: Board,
    },
  },
  handler: async (req, reply) => {
    const { id } = await req.params;
    await reply.send(boardsRepo.getBoard(id));
  },
};

const postBoardOpts = {
  method: 'POST',
  schema: {
    body: {
      type: 'object',
      required: ['title', 'columns'],
      properties: {
        title: { type: 'string' },
        columns: { type: 'array' },
      },
    },
    response: {
      201: Board,
    },
  },
  handler: async (req, reply) => {
    await reply.code(201).send(boardsRepo.addBoard(req.body));
  },
};

// const deleteUserOpts = {
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
//     await reply.send(usersRepo.deleteUser(id));
//   },
// };

// const updateUserOpts = {
//   method: 'PUT',
//   schema: {
//     response: {
//       200: User,
//     },
//   },
//   handler: async (req, reply) => {
//     const { id } = await req.params;
//     await reply.send(usersRepo.updateUser(id, req.body));
//   },
// };

module.exports = {
  getBoardsOpts,
  getBoardOpts,
  postBoardOpts,
  // deleteUserOpts,
  // updateUserOpts,
};
