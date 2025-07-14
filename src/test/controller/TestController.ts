import { NextFunction, Request, Response } from "express";
import { ITestInterface } from "../interfaces/ITestInterface";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils";


@injectable()
export class TestController {

    constructor (
       @inject(INTERFACE_TYPE.TestInteractor) private interactor: ITestInterface
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