import { NextFunction, Request, Response } from "express";
import { IAuthInteractor } from "../interfaces/auth/IAuthInteractor";
import { HttpException } from "../exceptions/root";
import { HttpStatusCodes } from "../config/HttpStatusCode";

export class AuthController {

    constructor(
        private interactor: IAuthInteractor
    ) {
        this.interactor = interactor
    }

    async onCreateUser (req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body

            const user = await this.interactor.createUser(data)
            return res.status(201).json(user)
        } catch (error) {
             if (error instanceof HttpException) {
                return res.status(error.statusCode).json({
                message: error.message,
                errorCode: error.errorCode,
                errors: error.errors || null,
                });
      }

      // fallback for unknown errors
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Internal Server Error",
        errorCode: "INTERNAL_ERROR",
      });
        }
    }
}