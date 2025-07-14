import { Router } from "express";
import { TestController } from "../controller/TestController";
import { TestInteractor } from "../interactors/test.interactor";
import { TestRepository } from "../repository/TestRepository";

const repository = new TestRepository()
const interactor = new TestInteractor(repository)
const controller = new TestController(interactor)

const testRoute = Router()

testRoute.post("/test", controller.onCreate.bind(controller))

export default testRoute;