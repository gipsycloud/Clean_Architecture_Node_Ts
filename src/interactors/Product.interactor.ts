import { inject, injectable } from "inversify";
import { IProductInteractor } from "../interfaces/IProductInteractor";
import { IProductRepository } from "../interfaces/repository/IProductRepository";
import { INTERFACE_TYPE } from "../utils";

@injectable()
export class ProductInteractor implements IProductInteractor{

    private repository: IProductRepository;

    constructor(
        @inject(INTERFACE_TYPE.ProductRepository) 
        repository: IProductRepository
    ) {
        this.repository = repository
    }

    createProduct(input: any) {
        return this.repository.create(input);
    }
    updateStock(id: number, stock: number) {
        return this.repository.update(id, stock)
    }
    getAllProduct(limit: number, offset: number) {
        return this.repository.find(limit, offset)
    }

}