
// const productRepository = new ProductRepository();
// const productInteractor = new ProductInteractor(productRepository);
// const controller = new ProductController(productInteractor);

export const INTERFACE_TYPE = {
    ProductRepository: Symbol.for("ProductRepository"),
    ProductInteractor: Symbol.for("ProductInteractor"),
    ProductController: Symbol.for("ProductController")
}