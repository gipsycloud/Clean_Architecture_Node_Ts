
// const repository = new TestRepository()
// const interactor = new TestInteractor(repository)
// const controller = new TestController(interactor)

export const INTERFACE_TYPE = {
  TestRepository: Symbol.for("TestRepository"),
  TestInteractor: Symbol.for("TestInteractor"),
  TestController: Symbol.for("TestController")
}