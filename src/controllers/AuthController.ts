import { NextFunction, Request, Response } from "express";
import { IAuthInteractor } from "../interfaces/auth/IAuthInteractor";

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
            next(error)
        }
    }
}