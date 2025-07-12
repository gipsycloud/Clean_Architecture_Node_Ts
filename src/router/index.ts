import { Router } from "express";
import { INTERFACE_TYPE } from "../utils";
import { ProductController } from '../controllers/Product.controller';
import container from "../config/container";



const router = Router()

const controller = container.get<ProductController>(INTERFACE_TYPE.ProductController)

router.get('/product', controller.onGetAllProduct.bind(controller));
router.post('/product', controller.onCreateProduct.bind(controller))
router.put('/product/:id', controller.onUpdateStock.bind(controller))

export default router;