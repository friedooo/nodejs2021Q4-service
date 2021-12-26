import { Response } from 'express';
import logger from './utils/logger';

type CallbackFunction = () => void;

/**
 * Checks if there is an error occured and executes in this case status 404 with message
 * @param res query Response
 * @param cb callback function<CallbackFunction>
 * @returns void
 */
const responseWrapper = async (res: Response, cb: CallbackFunction) => {
  try {
    await cb();
  } catch (err) {
    const result = (err as Error).message;
    res.status(404).send({ message: result });
    logger.error('error');
  }
};

export { responseWrapper };
