import { RedisClientType } from "redis";

export interface IAuthInterface { 
    login(input: any, redis: RedisClientType): any;
    register(input: any): any;
    logout(token: string): any;
    refreshToken(refreshToken: string,  redis: RedisClientType): any;
}