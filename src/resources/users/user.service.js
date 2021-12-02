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

// Options for get all items
const getAllOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: UserGet,
      },
    },
  },
  handler: async (req, reply) => {
    await reply.send(usersRepo.getAll());
  },
};

// const getItemOpts = {
//   schema: {
//     response: {
//       200: Item,
//     },
//   },
//   handler: getItem,
// };

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
  getAllOpts,
};
