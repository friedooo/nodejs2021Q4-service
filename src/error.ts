import { Request, Response, NextFunction } from 'express';

type CallbackFunction = () => void;

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) {
    res.sendStatus(500);
  }

  next();
};

const responseWrapper = async (res: Response, cb: CallbackFunction) => {
  try {
    await cb();
  } catch (err) {
    const result = (err as Error).message;
    res.status(404).send({ message: result });
  }
};

export { errorHandler, responseWrapper };
