import { PrismaClient } from "@prisma/client";
import prisma from "../../libs/prismaClient";
import { Test } from "../entities/test.entitie";
import { ITestRepository } from "../interfaces/ITestRepository";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils";
import { AppError } from "../errors/HttpError";

@injectable()
export class TestRepository implements ITestRepository {

    constructor (
       @inject(INTERFACE_TYPE.PrismaClient) private prisma: PrismaClient,
    ) {
        this.prisma = prisma
    }

    async create(data: Test): Promise<Test> {
        const user =await this.prisma.test.create({
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
        const test = await this.prisma.test.findUnique({
            where: {id}
        })

        if(!test) {
           throw new AppError(404, "Test not found");
        }

        return test as Test
    }
    async update(id: number, data: Test): Promise<Test> {
        const test = await this.prisma.test.update({
            where: {id},
            data: data
        })

        return test
    }
    async delete(id: number): Promise<Test> {
        const test = await this.prisma.test.delete({
            where:{id}
        })

        return test
    }

}