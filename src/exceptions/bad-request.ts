import { ErrorCodes } from "../config/errorStatusCode";
import { HttpStatusCodes } from "../config/HttpStatusCode";
import { HttpException } from "./root";

export class BadRequest extends HttpException {
  constructor(message: string, errors?: any) {
    super(message, ErrorCodes.BAD_REQUEST, HttpStatusCodes.BAD_REQUEST, errors);
  }
}
