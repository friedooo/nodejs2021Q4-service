const usersRepo = require('./user.memory.repository');

const User = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    login: { type: 'string' },
    // password: { type: 'string' },
  },
};

const getUsersOpts = {
  method: 'GET',
  schema: {
    response: {
      200: {
        type: 'array',
        items: User,
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
      200: User,
    },
  },
  handler: async (req, reply) => {
    const { id } = await req.params;
    const response = usersRepo.getUser(id);
    if (response) {
      await reply.send(response);
    } else {
      reply.code(404).send({ message: 'Not Found' });
    }
  },
};

const postUserOpts = {
  method: 'POST',
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
      201: User,
    },
  },
  handler: async (req, reply) => {
    await reply.code(201).send(usersRepo.addUser(req.body));
  },
};

const deleteUserOpts = {
  method: 'DELETE',
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: async (req, reply) => {
    const { id } = await req.params;
    await reply.send(usersRepo.deleteUser(id));
  },
};

const updateUserOpts = {
  method: 'PUT',
  schema: {
    response: {
      200: User,
    },
  },
  handler: async (req, reply) => {
    const { id } = await req.params;
    await reply.send(usersRepo.updateUser(id, req.body));
  },
};

module.exports = {
  getUsersOpts,
  getUserOpts,
  postUserOpts,
  deleteUserOpts,
  updateUserOpts,
};
