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

// const getUserOpts = {
//   method: 'GET',
//   schema: {
//     response: {
//       200: User,
//     },
//   },
//   handler: async (req, reply) => {
//     const { id } = await req.params;
//     await reply.send(usersRepo.getUser(id));
//   },
// };

// const postUserOpts = {
//   method: 'POST',
//   schema: {
//     body: {
//       type: 'object',
//       required: ['name', 'login', 'password'],
//       properties: {
//         name: { type: 'string' },
//         login: { type: 'string' },
//         password: { type: 'string' },
//       },
//     },
//     response: {
//       201: User,
//     },
//   },
//   handler: async (req, reply) => {
//     await reply.code(201).send(usersRepo.addUser(req.body));
//   },
// };

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
  // getUserOpts,
  // postUserOpts,
  // deleteUserOpts,
  // updateUserOpts,
};
