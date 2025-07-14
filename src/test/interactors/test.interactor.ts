import { ITestInterface } from "../interfaces/ITestInterface";
import { ITestRepository } from "../interfaces/ITestRepository";

export class TestInteractor implements ITestInterface {

    constructor(
       private repository: ITestRepository 
    ) {
        this.repository = repository
    }

    async createTest(input: any) {
        return this.repository.create(input)
    }
    getAllTests(limit: number, offset: number) {
        throw new Error("Method not implemented.");
    }
    getTest(id: number) {
        throw new Error("Method not implemented.");
    }
    updateTest(id: number, input: any) {
        throw new Error("Method not implemented.");
    }
    deleteTest(id: number) {
        throw new Error("Method not implemented.");
    }

}