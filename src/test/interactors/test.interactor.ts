import { inject, injectable } from "inversify";
import { ITestInterface } from "../interfaces/ITestInterface";
import { ITestRepository } from "../interfaces/ITestRepository";
import { INTERFACE_TYPE } from "../utils";

@injectable()
export class TestInteractor implements ITestInterface {

    constructor(
      @inject(INTERFACE_TYPE.TestRepository) private repository: ITestRepository 
    ) {
        this.repository = repository
    }

    async createTest(input: any) {
        return this.repository.create(input)
    }
    getAllTests(limit: number, offset: number) {
        return this.repository.getTests()
    }
    getTest(id: number) {
        return this.repository.getTest(id)
    }
    updateTest(id: number, input: any) {
        return this.repository.update(id,input)
    }
    deleteTest(id: number) {
        return this.repository.delete(id)
    }

}