import { ErrorCodes } from "../config/errorStatusCode";

export class HttpException extends Error {
    statusCode: number;
    errorCode: ErrorCodes;
    errors?: any;

    constructor(message: string, errorCode: ErrorCodes, statusCode: number, errors?: any) {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.errors = errors;
        Object.setPrototypeOf(this, new.target.prototype); // Fix prototype chain
    }
}
