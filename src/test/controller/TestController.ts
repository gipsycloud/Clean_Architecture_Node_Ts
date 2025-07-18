import { NextFunction, Request, Response } from "express";
import { ITestInterface } from "../interfaces/ITestInterface";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils";
import { catchAsync } from "../utils/catchAsync";


@injectable()
export class TestController {

    constructor (
       @inject(INTERFACE_TYPE.TestInteractor) private interactor: ITestInterface
    ) {
        this.interactor = interactor
    }
    onCreate = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body

            const result = await this.interactor.createTest(data)
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    getAllTest = async (req: Request, res: Response, next: NextFunction) => {
        try {
           const offset = parseInt(`${req.query.offset}`) || 0;
            const limit = parseInt(`${req.query.limit}`) || 10;

            const result = await this.interactor.getAllTests()
            
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

     getTest = catchAsync ( async (req: Request, res: Response, next: NextFunction) => {
            const id = parseInt(req.params.id)
            const test = await this.interactor.getTest(id)

            res.status(200).json(test)
    })

     updateTest = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id)
            const data = req.body
            const test = await this.interactor.updateTest(id, data)

            res.status(200).json(test)
        } catch (error) {
            next(error)
        }
    }

     deleteTest = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id)

            await this.interactor.deleteTest(id)
            res.status(200).json("Done")
        } catch (error) {
            next(error)
        }
    }
}