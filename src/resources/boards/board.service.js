const boardsRepo = require('./board.memory.repository');

const getAllBoards = async () => boardsRepo.getAllBoards();

const getById = async (id) => boardsRepo.getById(id);

const create = async (data) => boardsRepo.create(data);

const update = async (id, data) => boardsRepo.update(id, data);

const remove = async (id) => boardsRepo.remove(id);

module.exports = { getAllBoards, getById, create, update, remove };
