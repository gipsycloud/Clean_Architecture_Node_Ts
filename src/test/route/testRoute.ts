import { Router } from "express";
import container from "../config/container";
import { INTERFACE_TYPE } from "../utils";
import { TestController } from "../controller/TestController";

const testRoute = Router()

const controller = container.get<TestController>(INTERFACE_TYPE.TestController)

testRoute.post("/test", controller.onCreate.bind(controller))

export default testRoute;