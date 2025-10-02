import { Container } from "inversify";
import { INTERFACE_TYPE } from "../utils";
import { SaleRepository } from "../repository/SaleRepository";
import { ISaleRepository } from "../interfaces/ISaleRepository";
import { ISaleInterface } from "../interfaces/ISaleInterface";
import { SaleInteractor } from "../interactors/SaleInteractor";
import { SaleController } from "../controller/SaleController";
import { Interface } from "readline";

const container = new Container();

container.bind<ISaleRepository>(INTERFACE_TYPE.SaleRepository).to(SaleRepository)
container.bind<ISaleInterface>(INTERFACE_TYPE.SaleInteractor).to(SaleInteractor)
container.bind<SaleController>(INTERFACE_TYPE.SaleController).to(SaleController)

export default container;