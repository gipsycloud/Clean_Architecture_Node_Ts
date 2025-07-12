import { Router } from "express";
import { ProductController } from "../controllers/Product.controller";
import { ProductRepository } from "../repository/ProductReopsitory";
import { ProductInteractor } from "../interactors/Product.interactor";

const productRepository = new ProductRepository();
const productInteractor = new ProductInteractor(productRepository);
const controller = new ProductController(productInteractor);

const router = Router()

router.get('/product', controller.onGetAllProduct.bind(controller));
router.post('/product', controller.onCreateProduct.bind(controller))
router.put('/product/:id', controller.onUpdateStock.bind(controller))

export default router;