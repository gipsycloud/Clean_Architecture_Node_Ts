import prisma from "../../../libs/prismaClient";
import { Category } from "../entities/Category.entitie";
import { ICategoryRepository } from "../interfaces/ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {
  async getAllCategory(): Promise<Category[]> {
    const categories = await prisma.category.findMany()
    console.log(categories);
    return categories as Category[]
  }

  async create(data: Category): Promise<Category> {
    const category = await prisma.category.create({
      data: {
        category_name: data.category_name,
        description: data.description
      }
    })
    return category;
  }
}