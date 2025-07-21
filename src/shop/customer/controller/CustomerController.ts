import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils";
import { CustomerInteractor } from "../interactors/CustomerInteractor";

@injectable()
export class CustomerController {
  constructor(
    @inject(INTERFACE_TYPE.CustomerRepository) private interator: CustomerInteractor
  ) {
    this.interator = interator
  }

  async createCustomer(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body
      const customer = this.interator.onCreateCustomer(data)
      return customer
    } catch (error) {
      next(error)
    }
  }

  getAllCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customer = await this.interator.getAllCustomer()
      return customer
    } catch (error) {
      next(error)
    }
  }
}