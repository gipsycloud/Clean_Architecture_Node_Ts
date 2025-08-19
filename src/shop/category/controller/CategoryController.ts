import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils";
import { ICategoryRepository } from "../interfaces/ICategoryRepository";
import { NextFunction, Request, Response } from "express";

@injectable()
export class CategoryController {
  constructor(
    @inject(INTERFACE_TYPE.CategoryRepository) private respository: ICategoryRepository
  ) {
    this.respository = respository
  }

  getAllCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category = await this.respository.getAllCategory()
      res.status(200).json({
        message: "Get All Categories",
        data: category
      })
    } catch (error) {
      next(error)
    }
  }

  createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body
      const category = await this.respository.create(data)
      console.log("created category", category);

      res.status(201).json({
        message: "Category Created",
        data: category
      })
    } catch (error) {
      next(error)
    }
  }
}