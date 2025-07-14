export interface IAuthInteractor {
    createUser(input: any): any;
    loginUser(email: string, password: string): any;
    getUser(id: number): any;
}