import { ErrorCodes } from "../config/errorStatusCode";
import { User } from "../entities/Auth.entitie";
import { BadRequest } from "../exceptions/bad-request";
import { IAuthRepository } from "../interfaces/auth/repository/IAuthRepository";
import prisma from "../libs/prismaClient";


export class AuthRepository implements IAuthRepository {
    async create(data: User): Promise<User> {
        
        const existingUser = await prisma.user.findUnique({
            where: {email: data.email}
        })

        if(existingUser) {
            throw new BadRequest('User already exists', ErrorCodes.CONFLICT);
        }
        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                password: data.password
            }
        })

        return user
    }
    login(email: string, password: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getData(id: number): Promise<User> {
        throw new Error("Method not implemented.");
    }

}