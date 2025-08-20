import { inject, injectable } from "inversify";
import { IProductInterface } from "../interfaces/IProductInterface";
import { ProductRepository } from "../repository/ProductRepository";
import { INTERFACE_TYPE } from "../utils";

@injectable()
export class ProductInteractor implements IProductInterface {
    constructor (
       @inject(INTERFACE_TYPE.ProductRepository) private repository: ProductRepository
    ) {
        this.repository = repository
    }
    getAllProduct() {
        return this.repository.getAllProduct()
    }
    onCreateProduct(input: any) {
        return this.repository.create(input)
    }

}