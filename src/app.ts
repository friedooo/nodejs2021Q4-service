import express, { Application, Request, Response, NextFunction } from 'express';
// const morgan = require('morgan');
// const swaggerUI = require('swagger-ui-express');
// const path = require('path');
// const YAML = require('yamljs');
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';

const app: Application = express();
// const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());
// app.use(morgan('tiny'));

// app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    res.status(500).json({ message: err.message });
  }

  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
boardRouter.use('/', taskRouter);

export default app;
