const express = require('express');
// const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());
// app.use(morgan('tiny'));

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ message: err.message });
  }

  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
// boardRouter.use('/:boardId/tasks', taskRouter);

module.exports = app;
