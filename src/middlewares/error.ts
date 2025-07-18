// src/middlewares/errorMiddleware.ts
import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exceptions/root";
import { HttpStatusCodes } from "../config/HttpStatusCode";

export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof HttpException) {
    return res.status(error.statusCode).json({
      message: error.message,
      errorCode: error.errorCode,
      errors: error.errors || null,
    });
  }

  console.error(error);
  return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
    message: "Internal Server Error",
    errorCode: "INTERNAL_ERROR",
  });
};
