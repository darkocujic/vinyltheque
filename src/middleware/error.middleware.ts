import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger.utils";

const errorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.debug("hit this route");
  const status = error.status || 500;

  logger.error(
    `[${req.method}] ${req.path} >> status:: ${status}, statusCode:: ${error.statusCode} Message:: ${error.message}`
  );

  res.sendStatus(status);
};

export default errorMiddleware;
