import { NextFunction, Request, Response } from "express";
import { ITestInterface } from "../interfaces/ITestInterface";


export class TestController {

    constructor (
        private interactor: ITestInterface
    ) {
        this.interactor = interactor
    }
    async onCreate(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body

            const result = await this.interactor.createTest(data)
            return res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }
}