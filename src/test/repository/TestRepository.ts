import prisma from "../../libs/prismaClient";
import { Test } from "../entities/test.entitie";
import { ITestRepository } from "../interfaces/ITestRepository";


export class TestRepository implements ITestRepository {
    async create(data: Test): Promise<Test> {
        const user =await prisma.test.create({
            data: {
                name: data.name,
                description: data.description
            }
        })

        return user
    }
    async getTests(): Promise<Test[]> {
         const tests = await prisma.test.findMany()
         return tests;
    }
    async getTest(id: number): Promise<Test> {
        const test = await prisma.test.findUnique({
            where: {id}
        })

        return test as Test
    }
    async update(id: number, data: Test): Promise<Test> {
        const test = await prisma.test.update({
            where: {id},
            data: data
        })

        return test
    }
    async delete(id: number): Promise<Test> {
        const test = await prisma.test.delete({
            where:{id}
        })

        return test
    }

}