import express, { Application, Request, Response, NextFunction } from 'express';
// const swaggerUI = require('swagger-ui-express');
// const path = require('path');
// const YAML = require('yamljs');
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';

import CONFIG from './common/config';
import logger from './utils/logger';

// const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
// app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const app: Application = express();

app.listen(CONFIG.PORT, () => {
  console.log(`Server is running on http://localhost:${CONFIG.PORT}`);
  logger.info(`Server started and running on http://localhost:${CONFIG.PORT}`);
});

app.use(express.json());
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
