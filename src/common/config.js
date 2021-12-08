import dotenv = require('dotenv');
import path = require('path');

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const {PORT} = process.env;
const {NODE_ENV} = process.env;
const {MONGO_CONNECTION_STRING} = process.env;
const {JWT_SECRET_KEY} = process.env;
const AUTH_MODE = process.env.AUTH_MODE === 'true';

export {
  PORT, NODE_ENV, MONGO_CONNECTION_STRING, JWT_SECRET_KEY, AUTH_MODE
}
// export {
//   PORT: process.env.PORT,
//   NODE_ENV: process.env.NODE_ENV,
//   MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
//   JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
//   AUTH_MODE: process.env.AUTH_MODE === 'true',
// }
