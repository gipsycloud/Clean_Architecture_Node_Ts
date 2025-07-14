import { IAuthRepository } from '../interfaces/auth/repository/IAuthRepository';
import { IAuthInteractor } from './../interfaces/auth/IAuthInteractor';

export class AuthInteractor implements IAuthInteractor {

    constructor(
        private repository: IAuthRepository        
    ) {
        this.repository = repository
    }

    createUser(input: any) {
        return this.repository.create(input)
    }
    loginUser(email: string, password: string) {
        throw new Error('Method not implemented.');
    }
    getUser(id: number) {
        throw new Error('Method not implemented.');
    }

}