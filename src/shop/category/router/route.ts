import { Router } from "express";

import { CategoryController } from "../controller/CategoryController";
import { INTERFACE_TYPE } from "../utils";
import container from "../config/container";


const categoryRoute = Router()

const controller = container.get<CategoryController>(INTERFACE_TYPE.CategoryController)

categoryRoute.post('/create', controller.createCategory)
categoryRoute.get('/', controller.getAllCategory)

export default categoryRoute