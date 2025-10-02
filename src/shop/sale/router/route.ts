import { Router } from "express";
import container from "../container/container";
import { SaleController } from "../controller/SaleController";
import { INTERFACE_TYPE } from "../utils";

const saleRouter = Router()

const controller = container.get<SaleController>(INTERFACE_TYPE.SaleController)

// saleRouter.get('/', (req, res) => {
//   // res.send('Sale Service is up and running!');

// });

saleRouter.get('/', controller.getAllSales)
saleRouter.post('/create', controller.createSale)

export default saleRouter