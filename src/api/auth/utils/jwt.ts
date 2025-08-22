import jwt from "jsonwebtoken"
import { RedisClientType } from "redis";

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || "your_access_secret_key"
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "your_refresh_secret_key"
const ACCESS_EXPIRE = "1m";
const REFRESH_EXPIRE = 7 * 24 * 60 * 60; // in seconds

export const generateAccessToken = (userId: number) => {
    return jwt.sign({userId}, JWT_ACCESS_SECRET, {expiresIn: ACCESS_EXPIRE})
}

export const generateRefreshToken = (userId: number) => {
    return jwt.sign({ userId }, JWT_REFRESH_SECRET, { expiresIn: REFRESH_EXPIRE });
}


export const saveRefreshToken = async (redis: RedisClientType, userId: number, token: string) => {
    await redis.set(`refresh:${userId}`, token, { EX: REFRESH_EXPIRE });
}