import { Container } from "inversify";
import { INTERFACE_TYPE } from "../utils";
import { TestRepository } from "../repository/TestRepository";
import { TestInteractor } from "../interactors/test.interactor";
import { TestController } from "../controller/TestController";
import { ITestInterface } from "../interfaces/ITestInterface";
import { ITestRepository } from "../interfaces/ITestRepository";


const container = new Container()

container.bind<ITestRepository>(INTERFACE_TYPE.TestRepository).to(TestRepository)
container.bind<ITestInterface>(INTERFACE_TYPE.TestInteractor).to(TestInteractor)
container.bind<TestController>(INTERFACE_TYPE.TestController).to(TestController)

export default container;