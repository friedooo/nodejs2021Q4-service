const usersRepo = require('./user.memory.repository');

const UserGet = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    login: { type: 'string' },
    // password: { type: 'string' },
  },
};

const UserPost = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    login: { type: 'string' },
    password: { type: 'string' },
  },
};

const getUsersOpts = {
  method: 'GET',
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
  method: 'GET',
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

const postUserOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name', 'login', 'password'],
      properties: {
        name: { type: 'string' },
        login: { type: 'string' },
        password: { type: 'string' },
      },
    },
    response: {
      201: UserPost,
    },
  },
  handler: async (req, reply) => {
    await reply.send(usersRepo.addUser(req.body));
  },
};

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
  postUserOpts,
};
