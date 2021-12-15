import { v4 as uuidv4 } from 'uuid';
import { Column, IColumn } from './column.model';

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

  // static fromRequest(body: IBoard) {
  //   return new Board(body);
  // }
}

export { Board, IBoard };
