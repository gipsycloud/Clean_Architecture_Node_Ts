import { Router } from "express";
import { ProductController } from "../controller/ProductController";
import { INTERFACE_TYPE } from "../utils";
import container from "../config/container";


const productRoute = Router()

const controller = container.get<ProductController>(INTERFACE_TYPE.ProductController)

productRoute.post("/create",controller.crateProduct.bind(controller))
productRoute.get("/",controller.getAllProducts)

export default productRoute