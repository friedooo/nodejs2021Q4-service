import { v4 as uuidv4 } from 'uuid';
import { IColumn } from './column.model';

interface IBoard {
  id: string;
  title: string;
  columns: Array<IColumn>;
}

class Board implements IBoard {
  id: string;

  title: string;

  columns: Array<IColumn>;

  constructor({ id = uuidv4(), title = 'board', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

export { Board, IBoard };
