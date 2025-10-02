import { Router } from "express";
import container from "../config/container";
import { CustomerController } from "../controller/CustomerController";
import { INTERFACE_TYPE } from "../utils";
import { authMiddleware } from '../../../middlewares/authMiddleware';

const customerRoute = Router()

const controller = container.get<CustomerController>(INTERFACE_TYPE.CustomerController)

customerRoute.post('/create', authMiddleware, controller.createCustomer)
customerRoute.get('/', controller.getAllCustomer)

export default customerRoute