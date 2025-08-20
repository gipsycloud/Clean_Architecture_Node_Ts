import { Container } from "inversify";
import { ICategoryRepository } from "../interfaces/ICategoryRepository";
import { INTERFACE_TYPE } from "../utils";
import { CategoryRepository } from "../repository/CategoryRepository";
import { ICategoryInterface } from "../interfaces/ICategoryInterface";
import { CategoryIneractor } from "../interactors/CategoryInteractor";
import { CategoryController } from "../controller/CategoryController";

const container = new Container()

container.bind<ICategoryRepository>(INTERFACE_TYPE.CategoryRepository).to(CategoryRepository)
container.bind<ICategoryInterface>(INTERFACE_TYPE.CategoryIneractor).to(CategoryIneractor)
container.bind<CategoryController>(INTERFACE_TYPE.CategoryController).to(CategoryController)

export default container