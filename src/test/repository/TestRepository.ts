import prisma from "../../libs/prismaClient";
import { Test } from "../entities/test.entitie";
import { ITestRepository } from "../interfaces/ITestRepository";


export class TestRepository implements ITestRepository {
    create(data: Test): Promise<Test> {
        const user = prisma.test.create({
            data: {
                name: data.name,
                description: data.description
            }
        })

        return user
    }
    getTests(limit: number, offset: number): Promise<Test> {
        throw new Error("Method not implemented.");
    }
    getTest(id: number): Promise<Test> {
        throw new Error("Method not implemented.");
    }
    update(id: number, data: Test): Promise<Test> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<Test> {
        throw new Error("Method not implemented.");
    }

}