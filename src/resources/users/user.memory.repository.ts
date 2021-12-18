import { v4 as uuidv4 } from 'uuid';
import db from '../../data/db';

import { deletedUserCase } from '../tasks/task.memory.repository';
import { IUser } from './user.model';

/**
 * Returns array of Users or empty
 * @returns array of Users Array<IUser> | []
 */
const getAll = () => db.users;

/**
 * Returns User by ID or Throws error, if User not found in database.
 * @param id User's ID
 * @returns User<IUser>
 */
const getUserById = (id: string): IUser => {
  const user = db.users.find((elem) => elem.id === id);
  if (!user) {
    throw new Error(`User with ID ${id} not found`);
  }
  return user;
};

/**
 * Create User with data from request. Returns new User.
 * @param data data from request
 * @returns created User<IUser>
 */
const create = (data: IUser) => {
  const { name, login, password } = data;
  const newUser = {
    id: uuidv4(),
    name,
    login,
    password,
  };
  db.users = [...db.users, newUser];
  return newUser;
};

/**
 * Update User by ID with data.
 * @param id User's ID
 * @param data data for update of a new User<IUser>
 * @returns updated User<IUser>
 */
const update = (id: string, data: IUser) => {
  db.users = db.users.map((user) => (user.id === id ? { ...data, id } : user));
  const user = db.users.find((elem) => elem.id === id);
  if (!user) {
    throw new Error(`User with ID ${id} not found`);
  }
  return user;
};

/**
 * Remove User by ID
 * @param id User's ID
 * @returns message of successfull deletion
 */
const remove = (id: string) => {
  db.users = db.users.filter((user) => user.id !== id);
  deletedUserCase(id);
  return `user ${id} has been removed`;
};

export { getAll, getUserById, create, update, remove };
