import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils";
import { ISaleRepository } from "../interfaces/ISaleRepository";
import { NextFunction, Request, Response } from "express";

@injectable()
export class SaleController {
  constructor(
    @inject(INTERFACE_TYPE.SaleRepository) private repository: ISaleRepository
  ) {
    this.repository = repository
  }

  getAllSales = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sales = await this.repository.getAllSales()
      res.status(200).json({
        message: "Get All Sales",
        data: sales
      })
    } catch (error) {
      next(error)
    }
  }

  createSale = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body
      const sale = await this.repository.create(data)
      console.log("created sale", sale);
      res.status(201).json({
        message: "Sale Created",
        data: sale
      })
    } catch (error) {
      next(error)
    }
  }
}