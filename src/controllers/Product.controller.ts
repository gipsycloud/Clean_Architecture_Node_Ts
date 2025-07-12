import { NextFunction, Request, Response } from "express";
import { IProductInteractor } from "../interfaces/IProductInteractor";

export class ProductController {

    private interactor: IProductInteractor;
    
    constructor(interactor: IProductInteractor) {
        this.interactor = interactor
    }

    async onCreateProduct (req: Request, res: Response, next: NextFunction) {

        try {
            const data = req.body
            
            const product = await this.interactor.createProduct(data)

            return res.status(200).json(product)
        } catch (error) {
            next(error)
        }
    }

    async onGetAllProduct (req: Request, res: Response, next: NextFunction) {

        try {
            const offset = parseInt(`${req.query.offset}`) || 0;
            const limit = parseInt(`${req.query.limit}`) || 10;

            const product = await this.interactor.getAllProduct(offset, limit)

            res.status(200).json(product)
        } catch (error) {
            next(error)
        }
    }

    async onUpdateStock (req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id)
            const stock = req.body.stock

            const product = await this.interactor.updateStock(id, stock)

            res.status(200).json(product)
        } catch (error) {
            next(error)
        }
    }
}