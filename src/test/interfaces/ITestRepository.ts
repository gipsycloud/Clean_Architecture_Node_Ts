import { Test } from "../entities/test.entitie";

export interface ITestRepository {
    create(data: Test): Promise<Test>;
    getTests(): Promise<Test[]>;
    getTest(id: number): Promise<Test>;
    update(id: number, data: Test): Promise<Test>;
    delete(id: number): Promise<Test>
}