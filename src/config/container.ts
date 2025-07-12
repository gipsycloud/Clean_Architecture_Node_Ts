import { Container } from "inversify";
import { INTERFACE_TYPE } from "../utils";
import { IProductRepository } from "../interfaces/repository/IProductRepository";
import { IProductInteractor } from "../interfaces/IProductInteractor";
import { ProductInteractor } from "../interactors/Product.interactor";
import { ProductController } from "../controllers/Product.controller";
import { ProductRepository } from "../repository/ProductReopsitory";

const container = new Container();

container.bind<IProductRepository>(INTERFACE_TYPE.ProductRepository).to(ProductRepository);
container.bind<IProductInteractor>(INTERFACE_TYPE.ProductInteractor).to(ProductInteractor);
container.bind<ProductController>(INTERFACE_TYPE.ProductController).to(ProductController);

export default container;
