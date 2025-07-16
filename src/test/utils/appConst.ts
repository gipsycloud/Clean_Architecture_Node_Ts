
// const repository = new ProductRepository()
// const interactor = new ProductInteractor(repository)
// const controller = new ProductController(interactor)
export const INTERFACE_TYPE = {
  PrismaClient: Symbol.for("PrismaClient"),
  TestRepository: Symbol.for("TestRepository"),
  TestInteractor: Symbol.for("TestInteractor"),
  TestController: Symbol.for("TestController")
}