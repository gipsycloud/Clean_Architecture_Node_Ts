import { inject, injectable } from "inversify";
import { ICategoryInterface } from "../interfaces/ICategoryInterface";
import { INTERFACE_TYPE } from "../utils";
import { ICategoryRepository } from "../interfaces/ICategoryRepository";
import { response } from "express";

@injectable()

export class CategoryIneractor implements ICategoryInterface {
  constructor(
    @inject(INTERFACE_TYPE.CategoryRepository) private repository: ICategoryRepository
  ) {
    this.repository = repository
  }

  getAllCategory() {
    return this.repository.getAllCategory()
  }

  onCreateCategory(input: any) {
    return this.repository.create(input)
  }
}