import { v4 as uuidv4 } from 'uuid';
import db from '../../data/db';

import { deletedUserCase } from '../tasks/task.memory.repository';
import { IUser } from './user.model';

const getAll = () => db.users;

const getUserById = (id: string): IUser => {
  const user = db.users.find((elem) => elem.id === id);
  if (!user) {
    throw new Error(`User with ID ${id} not found`);
  }
  return user;
};

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

const update = (id: string, data: IUser) => {
  db.users = db.users.map((user) => (user.id === id ? { ...data, id } : user));
  const user = db.users.find((elem) => elem.id === id);
  if (!user) {
    throw new Error(`User with ID ${id} not found`);
  }
  return user;
};

const remove = (id: string) => {
  db.users = db.users.filter((user) => user.id !== id);
  deletedUserCase(id);
  return `user ${id} has been removed`;
};

export { getAll, getUserById, create, update, remove };
