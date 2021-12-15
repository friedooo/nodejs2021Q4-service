// import  { getAllUsers, getUser, createUser, updateUser, removeUser } from './user.memory.repository';
import {
  getAll,
  getUserById,
  create,
  update,
  remove,
} from './user.memory.repository';
import { IUser } from './user.model';

const getAllUsers = async () => getAll();

const getUser = async (id: string) => getUserById(id);

const createUser = async (data: IUser) => create(data);

const updateUser = async (id: string, data: IUser) => update(id, data);

const removeUser = async (id: string) => remove(id);

// export { getAllUsers, getUser, createUser, updateUser, removeUser };
export { getAllUsers, getUser, createUser, updateUser, removeUser };
