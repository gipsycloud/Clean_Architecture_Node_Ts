import { Product } from "../entities/Product.entitie";

export interface IProductRepository {
    create(data: Product): Promise<Product>
    getAllProduct(): Promise<Product[]>
}