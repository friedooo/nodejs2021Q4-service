const tasksRepo = require('./task.memory.repository');

const Task = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    order: { type: 'number' },
    description: { type: 'string' },
    userId: { type: ['string', 'null'] },
    boardId: { type: 'string' },
    columnId: { type: ['string', 'null'] },
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

const getTaskOpts = {
  method: 'GET',
  schema: {
    response: {
      200: Task,
    },
  },
  handler: async (req, reply) => {
    const boardId = req.url.split('/')[2];
    const taskId = req.url.split('/')[4];

    const response = await tasksRepo.getTask(boardId, taskId);
    if (response) {
      await reply.send(response);
    } else {
      reply.code(404).send({ message: 'Not Found' });
    }
  },
};

const postTaskOpts = {
  method: 'POST',
  schema: {
    body: {
      type: 'object',
      required: [
        'title',
        'order',
        'description',
        'userId',
        // 'boardId',
        'columnId',
      ],
      properties: {
        title: { type: 'string' },
        order: { type: 'number' },
        description: { type: 'string' },
        userId: { type: ['string', 'null'] },
        // boardId: { type: ['string', 'null'] },
        columnId: { type: ['string', 'null'] },
      },
    },
    response: {
      201: Task,
    },
  },
  handler: async (req, reply) => {
    const boardId = req.url.split('/')[2];
    await reply.code(201).send(tasksRepo.addTask(boardId, req.body));
  },
};

const deleteTaskOpts = {
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
    const taskId = req.url.split('/')[4];
    await reply.send(tasksRepo.deleteTask(taskId));
  },
};

const updateTaskOpts = {
  method: 'PUT',
  schema: {
    response: {
      200: Task,
    },
  },
  handler: async (req, reply) => {
    const boardId = req.url.split('/')[2];
    const taskId = req.url.split('/')[4];
    await reply.send(tasksRepo.updateTask(boardId, taskId, req.body));
  },
};

module.exports = {
  getTasksOpts,
  getTaskOpts,
  postTaskOpts,
  deleteTaskOpts,
  updateTaskOpts,
};
