import { injectable } from "inversify";
import { Product } from "../entities/Product";
import { IProductRepository } from "../interfaces/repository/IProductRepository";
import prisma from "../libs/prismaClient";

@injectable()
export class ProductRepository implements IProductRepository {

    async create(data: Product): Promise<Product> {
        const product = await prisma.product.create({
            data: {
                name: data.name,
                price: data.price,
                description: data.description,
                stock: data.stock,
            },
        });
        return product;
    }
    async find(limit: number, offset: number): Promise<Product[]> {
        const product = await prisma.product.findMany({
            take: offset,
            skip: limit
        });
        return product;
    }

    async update(id: number, stock: number): Promise<Product> {
        const product = await prisma.product.update({
            where: {id},
            data: {stock}
        })

        return product;
    }

}