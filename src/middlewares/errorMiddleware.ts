import { Request, Response, NextFunction } from "express";
import HttpException from '../exceptions/HttpException';
import { errors } from '../helpers/responseHelper';
export default (error: HttpException, request: Request, response: Response, next: NextFunction) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  return errors(response, 'request_failed', status, 'request.failed', message);
};