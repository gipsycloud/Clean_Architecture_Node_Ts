import { User } from "../entities/Auth.entitie";
import { IAuthRepository } from "../interfaces/auth/repository/IAuthRepository";
import prisma from "../libs/prismaClient";


export class AuthRepository implements IAuthRepository {
    async create(data: User): Promise<User> {
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