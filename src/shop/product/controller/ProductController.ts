import { NextFunction, Request, Response } from "express";
import { ProductInteractor } from "../interactors/ProductInteractor";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils";


@injectable()
export class ProductController {
    constructor (
       @inject(INTERFACE_TYPE.ProductInteractor) private interator: ProductInteractor
    ) {
        this.interator = interator
    }
    async crateProduct (req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body
            const product = this.interator.onCreateProduct(data)
            return product
        } catch (error) {
            next(error)
        }
    }

    getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const product = await this.interator.getAllProduct()

            return product
        } catch (error) {
            next(error)
        }
    }
}