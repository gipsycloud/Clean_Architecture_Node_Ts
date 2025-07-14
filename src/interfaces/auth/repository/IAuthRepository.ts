import { User } from "../../../entities/Auth.entitie";

export interface IAuthRepository {
    create(data: User): Promise<User>;
    login(email: string, password: string): Promise<User>;
    getData(id: number): Promise<User>;
}