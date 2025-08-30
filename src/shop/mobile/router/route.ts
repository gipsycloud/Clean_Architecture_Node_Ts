import { Router } from "express";
import { INTERFACE_TYPE } from "../utils";
import container from "../container/container";
import { MobileController } from "../controller/MobileController";

const mobileRoute = Router()

const controller = container.get<MobileController>(INTERFACE_TYPE.MobileController)
mobileRoute.post('/create', controller.createMobile)
mobileRoute.get('/', controller.getAllMobiles)

export default mobileRoute
