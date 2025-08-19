import { Category } from "../entities/Category.entitie"

export interface ICategoryRepository {
  getAllCategory(): Promise<Category[]>
  create(data: Category): Promise<Category>
}