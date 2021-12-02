const usersRepo = require('./user.memory.repository');

const UserGet = {
  method: 'GET',
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    login: { type: 'string' },
    // password: { type: 'string' },
  },
};

const getUsersOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: UserGet,
      },
    },
  },
  handler: async (req, reply) => {
    await reply.send(usersRepo.getAllUsers());
  },
};

const getUserOpts = {
  schema: {
    response: {
      200: UserGet,
    },
  },
  handler: async (req, reply) => {
    const { id } = await req.params;
    await reply.send(usersRepo.getUser(id));
  },
};

// const postItemOpts = {
//   schema: {
//     body: {
//       type: 'object',
//       required: ['name'],
//       properties: {
//         name: { type: 'string' },
//       },
//     },
//     response: {
//       201: Item,
//     },
//   },
//   handler: addItem,
// };

// const deleteItemOpts = {
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
//   handler: deleteItem,
// };

// const updateItemOpts = {
//   schema: {
//     response: {
//       200: Item,
//     },
//   },
//   handler: updateItem,
// };

module.exports = {
  getUsersOpts,
  getUserOpts,
};
