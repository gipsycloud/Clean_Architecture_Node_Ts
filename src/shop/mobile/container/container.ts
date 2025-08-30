import { Container } from "inversify";
import { INTERFACE_TYPE } from "../utils";
import { MobileRepository } from "../repository/MobileRepository";
import { IMobileRepository } from "../interfaces/IMobileRepository";
import { IMobileInterface } from "../interfaces/IMobileInterface";
import { MobileInteractor } from "../interactors/MobileInteractor";
import { MobileController } from "../controller/MobileController";

const container = new Container();

container.bind<IMobileRepository>(INTERFACE_TYPE.MobileRepository).to(MobileRepository)
container.bind<IMobileInterface>(INTERFACE_TYPE.MobileInteractor).to(MobileInteractor)
container.bind<MobileController>(INTERFACE_TYPE.MobileController).to(MobileController)

export default container;