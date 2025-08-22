import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../../../configs/catchAsync";
import { IAuthInterface } from "../useCase/interface/IAuthInterface";
import { HTTP_STATUS } from "../../../configs/httpStatusCodes";
import { inject, injectable, unmanaged } from "inversify";
import { INTERFACE_TYPE } from "../utils/appConst";
import { RedisClientType } from "redis";

@injectable()
export class AuthController {

    constructor (
       @inject(INTERFACE_TYPE.AuthInteractor) private interactor: IAuthInterface,private redis: RedisClientType 
    ) {
        this.interactor = interactor;
    }

    registerUser = catchAsync(async (req: Request, res: Response) => {
        const { name, email, phone, password } = req.body;

        const user = await this.interactor.register({ name, email, phone, password });

        res.status(HTTP_STATUS.CREATED).json({
            status: "success",
            data: {
                user
            }
        })
    })

    loginUser = catchAsync(async (req: Request, res: Response) => {
        const {email, password} = req.body

        const { accessToken, refreshToken } = await this.interactor.login({email, password}, this.redis)

        res.status(HTTP_STATUS.OK).json({
            status: "success",
            date: {
               accessToken,
               refreshToken,
            }
        })
    })
}