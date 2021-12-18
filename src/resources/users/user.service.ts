// import  { getAllUsers, getUser, createUser, updateUser, removeUser } from './user.memory.repository';
import {
  getAll,
  getUserById,
  create,
  update,
  remove,
} from './user.memory.repository';
import { IUser } from './user.model';

/**
 * Returns array of Users or empty
 * @returns array of Users Array<IUser> | []
 */
const getAllUsers = async () => getAll();

/**
 * Returns User by ID
 * @param id User's ID
 * @returns User<IUser>
 */
const getUser = async (id: string) => getUserById(id);

/**
 * Create User with data from request. Returns new User.
 * @param data data from request
 * @returns created User<IUser>
 */
const createUser = async (data: IUser) => create(data);

/**
 * Update User by ID with data. Returns updated User
 * @param id User's ID
 * @param data data for update of a new User<IUser>
 * @returns updated User<IUser>
 */
const updateUser = async (id: string, data: IUser) => update(id, data);

/**
 * Delete User by ID
 * @param id User's ID
 * @returns message of successfull deletion
 */
const removeUser = async (id: string) => remove(id);

export { getAllUsers, getUser, createUser, updateUser, removeUser };
