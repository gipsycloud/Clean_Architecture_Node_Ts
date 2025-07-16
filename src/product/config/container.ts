import { Container } from "inversify";
import { INTERFACE_TYPE } from "../utils";
import { ProductRepository } from "../repository/ProductRepository";
import { ProductInteractor } from "../interactors/ProductInteractor";
import { ProductController } from "../controller/ProductController";
import { IProductRepository } from "../interfaces/IProudctRepository";
import { IProductInterface } from "../interfaces/IProductInterface";


const container = new Container()

container.bind<IProductRepository>(INTERFACE_TYPE.ProductRepository).to(ProductRepository)
container.bind<IProductInterface>(INTERFACE_TYPE.ProductInteractor).to(ProductInteractor)
container.bind<ProductController>(INTERFACE_TYPE.ProductController).to(ProductController)

export default container