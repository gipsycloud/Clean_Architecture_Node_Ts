import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils";
import { IMobileRepository } from "../interfaces/IMobileRepository";
import { create } from "domain";

@injectable()
export class MobileController {
  constructor(
    @inject(INTERFACE_TYPE.MobileRepository) private respository: IMobileRepository
  ) {
    this.respository = respository
  }

  getAllMobiles = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const mobiles = await this.respository.getAllMobiles()
      res.status(200).json({
        message: "Get All Mobiles",
        data: mobiles
      })
    } catch (error) {
      next(error)
    }
  }

  createMobile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body
      const mobile = await this.respository.create(data)
      console.log("created mobile", mobile);
      res.status(201).json({
        message: "Mobile Created",
        data: mobile
      })
    } catch (error) {
      next(error)
    }
  }
}